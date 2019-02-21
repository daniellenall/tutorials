from django.db import models
from django.forms import ModelForm

# Create your models here.
class Type(models.Model):
    type = models.CharField(max_length=28)

class Contact(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    content = models.TextField()

    def __str__(self):
        return self.content

class ContactForm(forms.Form):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'type', 'content']
