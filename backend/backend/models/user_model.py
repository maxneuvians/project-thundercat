from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    UserManager,
    AbstractUser,
)
from django.db.models import Q


class MyUserManager(BaseUserManager):
    def _create_user(self, username, password, given_name, family_name, email):
        """
        Creates/Saves a User with the given username, password, given_name, family_name and email.
        """
        if not username:
            raise ValueError("The username must be set")
        if not password:
            raise ValueError("The password must be set")
        if not given_name:
            raise ValueError("The given name must be set")
        if not family_name:
            raise ValueError("The family name must be set")
        email = self.normalize_email(email)
        user = self.model(
            username=username,
            given_name=given_name,
            family_name=family_name,
            email=email,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password, given_name, family_name, email):
        return self._create_user(username, password, given_name, family_name, email)

    def create_superuser(self, username, password, given_name, family_name, email):
        return self._create_user(username, password, given_name, family_name, email)


class MyUser(AbstractBaseUser):
    username = models.CharField(max_length=50, blank=False, null=False)
    given_name = models.CharField(max_length=50, blank=False, null=False)
    family_name = models.CharField(max_length=50, blank=False, null=False)
    email = models.EmailField(default="email@123.ca")
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = MyUserManager()

    REQUIRED_FIELDS = ["username", "password", "given_name", "family_name"]
    USERNAME_FIELD = "username"


class CustomUserManager(UserManager):
    def get_by_natural_key(self, username):
        return self.get(
            Q(**{self.model.USERNAME_FIELD: username})
            | Q(**{self.model.EMAIL_FIELD: username})
        )


class User(AbstractUser):
    objects = CustomUserManager()
