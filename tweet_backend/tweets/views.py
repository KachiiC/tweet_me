from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Tweet
from .serializers import *


@api_view(['GET'])
def tweet_list(request):
    request.method == 'GET'
    data = Tweet.objects.all()

    serializer = TweetSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def post_tweet(request):

    request.method == 'POST'

    serializer = TweetSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
