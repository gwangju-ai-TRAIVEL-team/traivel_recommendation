from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('result/', views.result, name='result'),
    path('getaddr/', views.getaddr, name='getaddr'),
    path('hello/', views.helloAPI)
]
