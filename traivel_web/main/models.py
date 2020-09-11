from django.db import models

# Create your models here.

class Input(models.Model) :
    region = models.CharField(max_length=18)
    keyword = models.CharField(max_length=20)
    Type = models.CharField(max_length=20)