from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import SustainableAction
from .serializers import SustainableActionSerializer

class ActionListCreateView(APIView):
    """Handles GET (List) and POST (Create)"""
    
    def get(self, request):
        actions = SustainableAction.objects.all()
        serializer = SustainableActionSerializer(actions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = SustainableActionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleActionView(APIView):
    """Handles GET, PUT, PATCH, DELETE for a single item"""

    def get(self, request, id):
        action = get_object_or_404(SustainableAction, id=id)
        serializer = SustainableActionSerializer(action)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        action = get_object_or_404(SustainableAction, id=id)
        serializer = SustainableActionSerializer(action, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id):
        action = get_object_or_404(SustainableAction, id=id)
        serializer = SustainableActionSerializer(action, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        action = get_object_or_404(SustainableAction, id=id)
        action.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
