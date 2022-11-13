from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('user-guide', views.user_guide, name='user-guide'),
]
