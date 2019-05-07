"""
It tests the queryset that is used in the view (user_view.py),
but also the model itself (user_model.py)
"""

from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from views.user_view import User
from serializers import user_serializer


class UserViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_user(email="", username="", password=""):
        if (email, username, password) != "":
            User.objects.create_user(email=email, username=username, password=password)

    def setUp(self):
        self.create_user(
            email="username1@email.ca", username="username1", password="password1"
        )
        self.create_user(
            email="username2@email.ca", username="username2", password="password2"
        )


class GetAllUsersTests(UserViewTest):
    def test_get_all_users(self):
        response = self.client.get("http://localhost:80/view_users/")

        # SELECT * FROM <Users_Table>;
        expected = User.objects.all()
        serialized = user_serializer.UserSerializer(expected, many=True)

        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class GetSpecificDataTest(UserViewTest):
    def test_get_specific_user(self):
        response = self.client.get("http://localhost:80/view_users/")

        # SELECT username FROM <Users_Table> WHERE username='username1';
        expected1 = User.objects.values_list("username", flat=True).get(
            username="username1"
        )

        # SELECT email FROM backend_myuser WHERE username='username2';
        expected2 = User.objects.values_list("email", flat=True).get(
            username="username2"
        )

        self.assertEqual(expected1, "username1")
        self.assertEqual(expected2, "username2@email.ca")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
