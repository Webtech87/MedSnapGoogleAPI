from django import forms


class FollowersForm(forms.Form):
    name = forms.CharField(label="Full name", max_length=100)
    email = forms.EmailField(label="Email", max_length=100)
    phone = forms.CharField(label="Phone", max_length=100)
