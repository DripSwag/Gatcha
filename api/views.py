from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.utils import serializer_helpers
from rest_framework.views import status
from .models import User, BannerCharacter, UserCharacter, Banner
from rest_framework.decorators import api_view
import random
from .serializer import UserSerializer, BannerCharacterSerializer, UserCharacterSerializer, BannerSerializer
from api import serializer

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
def login(request, Username, Password):
    try:
        user = User.objects.get(username=Username, password=Password)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({})

@api_view(["GET"])
def user(request, user_id):
    if request.method == "GET":
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

@api_view(["GET", "POST"])
def getBannerCharacters(request):
    if request.method == "GET":
        character = BannerCharacter.objects.all()
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
        #Checks if the user has enough money
        banner = Banner.objects.get(id=request.data["banner"])
        bannerDic = BannerSerializer(banner, many=False).data
        user = User.objects.get(id=request.data["user"])
        userDic = UserSerializer(user, many=False).data
        if userDic["money"] >= bannerDic["price"]:
            #Adjusts users money
            math = userDic["money"] - bannerDic["price"]
            print(math)
            setattr(user, "money", math)
            user.save()
            #Gets all the characters in the banner and picks a random one
            characters = BannerCharacter.objects.filter(banner__id=request.data["banner"]).values()
            rolled = characters[random.randint(0, len(characters) - 1)]
            rolled.pop("id")
            new = rolled | {"user": request.data["user"]}
            serializer = UserCharacterSerializer(data=new)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("Poor", status=status.HTTP_303_SEE_OTHER)


@api_view(["GET"])
def getRoll(request, user_id):
    if request.method == "GET":
        characters = UserCharacter.objects.filter(user=user_id)
        serializer = UserCharacterSerializer(characters, many=True)
        return Response(serializer.data)
