# Generated by Django 4.2.2 on 2024-08-13 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_remove_user_username_user_first_name_user_last_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='wallet_address',
            field=models.CharField(blank=True, max_length=42, null=True),
        ),
    ]