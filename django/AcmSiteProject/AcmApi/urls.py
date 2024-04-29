from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('counter/', views.counter, name='counter'),
    path('get-csrf-token/', views.get_csrf_token, name='get_csrf_token'),
    path('quote/', views.quote, name='quote')
]
