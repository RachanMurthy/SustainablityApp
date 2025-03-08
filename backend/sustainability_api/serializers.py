from rest_framework import serializers
from .models import SustainableAction

class SustainableActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SustainableAction
        fields = '__all__'
