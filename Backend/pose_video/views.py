from django.shortcuts import render
from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from .serializer import VideoSerializer,LandmarkVideoSerializers,LandmarkFrameSerializer
from .pose_detection_video import estimate_pose_video
from rest_framework.response import Response
from rest_framework import status



class PoseVideo(generics.GenericAPIView):
    parser_classes=[MultiPartParser]
    serializer_class=VideoSerializer

    def post(self, request):
        serializer=self.get_serializer(data=request.data)

        if serializer.is_valid():
            video=serializer.validated_data['video']
            landmarks=estimate_pose_video(video)
            
            output_serializer=LandmarkFrameSerializer(data=landmarks,many=True)
            output_serializer.is_valid(raise_exception=True)

            return Response({
                'landmarks':output_serializer.data
            },status=status.HTTP_200_OK)



