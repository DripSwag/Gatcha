from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.getUsers, name="users"),
    path('users/<str:Username>/<str:Password>', views.login, name="login"),
    path('bannerCharacters/', views.getBannerCharacters, name="bannerCharcters"),
    path('roll/', views.roll, name="roll"),
    path('roll/<int:user_id>', views.getRoll, name="Get user roll characters"),
    path("user/<int:user_id>", views.user, name="User"),
    path("banner", views.getBanners, name="Banners")
]
