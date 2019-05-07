from .base import *


DEBUG = True

INTERNAL_IPS = ["127.0.0.1"]

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

# Dev/Production servers will use environment variables injected at runtime
# to connect to a static PostgreSQL Database.
DATABASES = {}
if os.environ.get("ENVIRONMENT") == "dev":
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql_psycopg2",
            "NAME": os.environ.get("DATABASE_NAME", ""),
            "USER": os.environ.get("DATABASE_USER", ""),
            "PASSWORD": os.environ.get("DATABASE_PASSWORD", ""),
            "HOST": os.environ.get("DATABASE_HOST", ""),
            "PORT": os.environ.get("DATABASE_PORT", ""),
        }
    }
else:
    # Local development will use a virtual databse setup in Docker-compose
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": "postgres",
            "USER": "postgres",
            "HOST": "db",  # set in docker-compose.yml
            "PORT": 5432,  # default postgres port
        }
    }

INSTALLED_APPS.append("debug_toolbar")

MIDDLEWARE.append("debug_toolbar.middleware.DebugToolbarMiddleware")

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static/")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media/")
