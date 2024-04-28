from . import models
from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http import JsonResponse
from django.middleware.csrf import get_token

# views

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})

def counter(request):
    if request.method == 'POST':
        new = models.Counter(total=1)
        new.save()
