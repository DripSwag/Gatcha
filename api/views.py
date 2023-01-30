from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.utils import serializer_helpers
from rest_framework.views import status
from .models import User, BannerCharacter, UserCharacter
from .serializer import UserSerializer, BannerCharacterSerializer, UserCharacterSerializer
import random

# Create your views here.

@api_view(["GET", "POST"])
def getUsers(request):
    if request.method == "GET":
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def getUser(request, Username, Password):
    user = User.objects.get(username=Username, password=Password)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(["GET", "POST"])
def getBannerCharacters(request):
    if request.method == "GET":
        character = BannerCharacter.objects.all()
        print(type(character.values()[0]))
        print(type(request.data))
        serializer = BannerCharacterSerializer(character, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = BannerCharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST", "GET"])
def roll(request):
    if request.method == "GET":
        characters = UserCharacter.objects.all()
        serializer = UserCharacterSerializer(characters, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        #Gets all the characters in the banner and picks a random one
        characters = BannerCharacter.objects.filter(banner__id=request.data["banner"]).values()
        rolled = characters[random.randint(0, len(characters) - 1)]
        rolled.pop("id")
        new = rolled | {"user": request.data["user"]}
        print(new)
        serializer = UserCharacterSerializer(data=new)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
