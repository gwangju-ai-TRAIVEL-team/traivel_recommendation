from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('result/', views.result, name='result'),

    path('api/recommend/', views.recommend, name='recommend'),
    path('api/mainajax/', views.mainajax, name='mainajax'),
    path('api/mainfooterbox/', views.mainfooterbox, name='mainfooterbox'),
    path('api/addrdesc/<int:addr_id>', views.addrdesc, name="addrdesc"),
    path('api/getaddr/', views.getaddr, name='getaddr'),
]
