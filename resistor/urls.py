from django.urls import path
from . import views

urlpatterns = [
    path('resistor_calculator/', views.main, name='home'),
]