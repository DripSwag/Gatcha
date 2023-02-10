from rest_framework.serializers import ModelSerializer
from .models import User
from .models import BannerCharacter, UserCharacter

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
