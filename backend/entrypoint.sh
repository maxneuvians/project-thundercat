#!bin/bash
python manage.py makemigrations custom_models
python manage.py migrate custom_models
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
