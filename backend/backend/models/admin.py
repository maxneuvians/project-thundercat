from django.contrib import admin
from backend.models.user_model import User
from django.contrib.auth.admin import UserAdmin

admin.site.register(User, UserAdmin)
