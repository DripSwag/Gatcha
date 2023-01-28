from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.getUsers),
    path('users/<str:pk>/', views.getUser, name="user")
]
