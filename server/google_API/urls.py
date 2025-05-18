from django.urls import path
from .views import send_email

app_name = 'google_API'

urlpatterns = [
    path('send_data_form/', send_email, name='send_data_form'),
]