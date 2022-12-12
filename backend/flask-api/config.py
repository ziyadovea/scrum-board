from datetime import timedelta
from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))


class Config:
    # DB
    SQLALCHEMY_DATABASE_URI = environ.get('POSTGRES_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT
    JWT_SECRET_KEY = environ.get('JWT_SECRET_KEY')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)

    # CORS
    CORS_HEADERS = 'Content-Type'

