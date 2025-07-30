from django.urls import path
from .views import PoseVideo

urlpatterns=[
    path('video_pose/', PoseVideo.as_view())
]