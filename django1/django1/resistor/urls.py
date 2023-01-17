from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='home'),
    path('resistorcalculator', views.main, name='home'),
]