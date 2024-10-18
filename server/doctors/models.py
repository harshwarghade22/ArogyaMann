from django.db import models

# Create your models here.

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    level=models.IntegerField()
    specialization = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)
    email=models.EmailField(max_length=30, default='default@example.com')
    def __str__(self): 
        return self.name
