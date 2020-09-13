# from django.test import TestCase
#
# # Create your tests here.
# from django.urls import reverse
# from rest_framework import status
# from rest_framework.test import APITestCase
#
# from tweets.models import Tweet
# from tweets.serializers import TweetSerializer
#
#
# class InitialTest(APITestCase):
#     endpoint = reverse('all_tweets')
#
#     expected = [
#         Tweet(content="First tweet"),
#         Tweet(content="Second tweet")
#     ]
#
#     def setUp(self):
#         for tweet in self.expected:
#             tweet.save()
#
#     def test_tweets_list__succcess(self):
#
#         serializer_tweets = TweetSerializer(self.expected, many=True)
#
#         response = self.client.get(self.endpoint)
#         assert response.status_code == status.HTTP_200_OK
#         assert response.data == serializer_tweets.data
