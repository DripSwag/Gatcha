from django.contrib import admin
from .models import User, BannerCharacter, Banner

# Register your models here.

admin.site.register(User)
admin.site.register(BannerCharacter)
admin.site.register(Banner)
