from rest_framework import serializers
from backend.custom_models.database_check_model import DatabaseCheckModel

# Serializers define the API representation
class DatabaseCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = DatabaseCheckModel
        fields = "__all__"
