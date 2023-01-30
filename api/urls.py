from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.getUsers, name="users"),
    path('users/<str:Username>/<str:Password>', views.getUser, name="user"),
    path('bannerCharacters/', views.getBannerCharacters, name="bannerCharcters"),
    path('roll/', views.roll, name="roll")
]
