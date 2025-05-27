from django import forms
from django.db import models


class Speciality(models.TextChoices):
    SELECT = "Select", "Select"
    MEDICINE = "Medicine", "Medicine"
    DENTIST = "Dentist", "Dentist"
    PSYCHOLOGIST = "Psychologist", "Psychologist"
    EDUCATOR = "Educator", "Educator"
    TECHNICIAN = "Technician", "Technician"
    OTHER = "Other", "Other"

class FollowersForm(forms.Form):
    name = forms.CharField(label="Full name", max_length=100)
    email = forms.EmailField(label="Email", max_length=100)
    speciality = forms.ChoiceField(label="Speciality", choices=Speciality.choices)
    phone = forms.CharField(label="Phone", max_length=100)
