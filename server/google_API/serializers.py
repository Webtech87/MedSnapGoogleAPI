from rest_framework import serializers

class FollowersSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    specialty = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=100)
    consent = serializers.BooleanField()
