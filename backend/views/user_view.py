from rest_framework import viewsets
from serializers.user_serializer import UserSerializer
from custom_models.models import User


class UserViewSet(viewsets.ModelViewSet):
    # GETS USER LIST
    queryset = User.objects.all()  # same as 'SELECT * FROM backend_myuser;'
    serializer_class = UserSerializer
    # allows only GET requests
    http_method_names = [
        "get"
    ]  # TODO: (fnormand01) disable GET request as soon as we deploy
