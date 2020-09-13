from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Tweet (models.Model):
    content = models.CharField(max_length=250)
    date = models.DateTimeField(default=timezone.now)
