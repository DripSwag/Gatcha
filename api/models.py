from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    money = models.IntegerField(default=0)

    def __str__(self):
        return self.username

class Banner(models.Model):
    name = models.CharField(max_length=30)
    price = models.IntegerField()

    def __str__(self):
        return self.name

class BannerCharacter(models.Model):
    class Rarity(models.IntegerChoices):
        UR = 1, "UR"
        SSR = 2, "SSR"
        SR = 3, "SR"
        R = 4, "R"
        N = 5, "N"

    name = models.CharField(max_length=30)
    attack = models.IntegerField()
    defense = models.IntegerField()
    rarity = models.IntegerField(choices=Rarity.choices)
    banner = models.ManyToManyField(Banner)

    def __str__(self):
        return self.name

class UserCharacter(models.Model):
    class Rarity(models.IntegerChoices):
        UR = 1, "UR"
        SSR = 2, "SSR"
        SR = 3, "SR"
        R = 4, "R"
        N = 5, "N"

    name = models.CharField(max_length=30)
    attack = models.IntegerField()
    defense = models.IntegerField()
    rarity = models.IntegerField(choices=Rarity.choices)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
