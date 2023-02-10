# Generated by Django 4.1.3 on 2023-01-28 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('attack', models.IntegerField()),
                ('defense', models.IntegerField()),
                ('rarity', models.IntegerField(choices=[(1, 'UR'), (2, 'SSR'), (3, 'SR'), (4, 'R'), (5, 'N')])),
            ],
        ),
    ]