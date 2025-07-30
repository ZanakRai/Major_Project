from django.urls import path
from .views import PoseDetection,RegisterView,LoginView,UserDashboard

urlpatterns = [
    path('pose_detect/',PoseDetection.as_view()),
    path('register/',RegisterView.as_view()),
    path('login/',LoginView.as_view()),
    path('dashboard/',UserDashboard.as_view())
]