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

class Lda(models.Model) :
    name = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    tel = models.CharField(max_length=20)
    keyword = models.CharField(max_length=50)
    photo = models.CharField(max_length=100)
    address = models.CharField(max_length=50)
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    region_2 = models.CharField(max_length=20)
    topic = models.CharField(max_length=5)
    topic_rate = models.CharField(max_length=20)
    topic_list = models.CharField(max_length=50)