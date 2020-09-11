from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Userinfo(models.Model) :
    user = models.CharField(max_length=30)
    nickname = models.CharField(max_length=15)
    age = models.CharField(max_length=3)
    address = models.CharField(max_length=20)
    sex = models.CharField(max_length=50)
    email = models.CharField(max_length=50)