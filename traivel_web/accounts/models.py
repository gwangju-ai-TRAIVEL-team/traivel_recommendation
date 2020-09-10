from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Userinfo(models.Model) :
    nickname = models.CharField(max_length=15)
    age = models.CharField(max_length=3)
    address = models.CharField(max_length=20)
    sex = models.CharField(max_length=50)
    email = models.CharField(max_length=50)