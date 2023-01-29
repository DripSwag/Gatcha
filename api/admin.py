from django.contrib import admin
from .models import User, BannerCharacter, Banner, UserCharacter

# Register your models here.

admin.site.register(User)
admin.site.register(BannerCharacter)
admin.site.register(Banner)
admin.site.register(UserCharacter)
