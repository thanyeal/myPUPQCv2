from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='index'),
    path('index/', views.base, name='index')
]
