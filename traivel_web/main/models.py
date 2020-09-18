from django.db import models

# Create your models here.

class Input(models.Model) :
    region = models.CharField(max_length=18)
    keyword = models.CharField(max_length=20)
    Type = models.CharField(max_length=20)

class place(models.Model):
    address = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    keyword = models.CharField(max_length=50)
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    areacode = models.CharField(max_length=50)