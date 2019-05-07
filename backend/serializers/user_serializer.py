from rest_framework import serializers
from custom_models.models import User

# Serializers define the API representation
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("email", "username", "password")
