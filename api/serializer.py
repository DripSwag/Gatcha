from rest_framework.serializers import ModelSerializer
from .models import Banner, BannerCharacter, UserCharacter, User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class BannerCharacterSerializer(ModelSerializer):
    class Meta:
        model = BannerCharacter
        fields = '__all__'

class UserCharacterSerializer(ModelSerializer):
    class Meta:
        model = UserCharacter
        fields = '__all__'

class BannerSerializer(ModelSerializer):
    class Meta:
        model = Banner
        fields = '__all__'
