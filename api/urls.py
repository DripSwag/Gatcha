from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.getUsers, name="users"),
    path('users/<str:pk>/', views.getUser, name="user"),
    path('bannerCharacters/', views.getBannerCharacters, name="bannerCharcters")
]
