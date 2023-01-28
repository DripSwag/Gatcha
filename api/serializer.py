from rest_framework.serializers import ModelSerializer
from .models import User
from .models import BannerCharacter

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CharacterSerializer(ModelSerializer):
    class Meta:
        model = BannerCharacter
        fields = '__all__'
