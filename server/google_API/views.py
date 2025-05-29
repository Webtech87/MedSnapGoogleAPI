import os

from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.core.mail import send_mail
import gspread
from google.oauth2.service_account import Credentials
import datetime
import json
from django.views.decorators.csrf import csrf_exempt

from .forms import FollowersForm
from dotenv import load_dotenv
import base64

load_dotenv()

SHEET_HEADERS = ['Name', 'Email', 'Telefone', 'Subscrible at']

def add_to_gs(new_data: list[str]):
    try:
        print("Setting up Google Sheets connection...")
        SCOPES = [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive',
        ]
        GOOGLE_SHEET_ID = os.environ.get('GOOGLE_SHEET_ID')
        GOOGLE_SHEET_BASE64 = os.environ.get('GOOGLE_SHEET_BASE64')

        print(f"Google Sheet ID: {GOOGLE_SHEET_ID}")

        credentials_info = json.loads(
            base64.b64decode(GOOGLE_SHEET_BASE64).decode('utf-8')
        )
        credentials = Credentials.from_service_account_info(
            credentials_info, scopes=SCOPES
        )

        client = gspread.authorize(credentials)
        google_sheet_file = client.open_by_key(GOOGLE_SHEET_ID)
        today_wb = datetime.datetime.date(datetime.datetime.now()).strftime('%Y-%m')
        sheets_list = [sheet.title for sheet in google_sheet_file.worksheets()]

        print(f"Available sheets: {sheets_list}")
        print(f"Looking for sheet: {today_wb}")

        if today_wb not in sheets_list:
            print(f"Creating new sheet: {today_wb}")
            google_sheet_file.add_worksheet(
                title=today_wb,
                rows="1000",
                cols=len(SHEET_HEADERS)
            )
            wb = google_sheet_file.worksheet(today_wb)
            wb.insert_row(SHEET_HEADERS, 1)

        wb = google_sheet_file.worksheet(today_wb)
        wb.append_row(new_data)
        print("Data added to Google Sheet")
    except Exception as sheet_error:
        print(f"Google Sheets error: {sheet_error}")

@csrf_exempt
def send_email(request):
    context = {
        'title': "Follow us",
        'name': "Boris Isac"
    }
    if request.method == "POST":
        data = json.loads(request.body)
        form = FollowersForm(data)

        if form.is_valid():
            try:
                cd = form.cleaned_data
                new_time = datetime.datetime.now() + datetime.timedelta(hours=1)
                formatted_time = new_time.strftime('%d/%m/%Y %H:%M')

                new_data = [
                    cd['name'],
                    cd['email'],
                    cd['phone'],
                    formatted_time
                ]
                print(cd)
                send_mail(
                    subject='Subscrible follower',
                    message=f"+ 1 MedSnap Follower: {cd['name']} {cd['email']} {cd['phone']}",
                    from_email=os.environ.get('MAIL_USERNAME'),
                    recipient_list=[cd['email'], os.environ.get('MAIL_USERNAME'), "boris.isac@webtech87.pt"],
                    fail_silently=False,
                )
                add_to_gs(new_data)
                return JsonResponse(
                    {
                        'success': True,
                        'message': 'Formulário enviado com sucesso! Entraremos em contato em breve.'
                    }
                )
            except Exception as e:
                return JsonResponse(
                    {
                        "result": "Error sended data",
                        "error": str(e)
                    }
                )
    else:
        form = FollowersForm()
    context['form'] = form

    return render(request, 'index.html', context)
