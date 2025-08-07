from django.shortcuts import render
from .serializer import PoseDetectionSerializer,PoseLandmarksSerializer,RegisterSerializer,UserSerializer,LoginSerializer
from rest_framework import generics
from rest_framework.response import Response
from .pose_detect import estimate_pose
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User

class RegisterView(APIView):
    def post(self,request):
        data=request.data
        serializer=RegisterSerializer(data=data)
        if serializer.is_valid():
            user=serializer.save()
            return Response(UserSerializer(user).data)
        return Response(serializer.errors)
    
class LoginView(APIView):
    def post(self,request):
        data=request.data
        
        username=data.get('username')
        password=data.get('password')
        serializer=LoginSerializer(data=data)
        if serializer.is_valid():
            user=authenticate(username=username,password=password)
            if user:
                token,_=Token.objects.get_or_create(user=user)
                data=UserSerializer(user).data
                data['token']=token.key
                return Response(data)
            return Response("Invalid credentials")
        return Response(serializer.errors)


class UserDashboard(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]
    def get(self,request):
        user=request.user
        serializer=UserSerializer(user)
        return Response(serializer.data)


class LogOut(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]
    def post(self,request):
        user=request.user
        if user.is_authenticated:
            request.user.auth_token.delete()
            return Response({"message":"Logout successfully"})
        return Response({"message":"Unable to logout"})

class PoseDetection(generics.GenericAPIView):
    parser_classes=[MultiPartParser]
    serializer_class=PoseDetectionSerializer

    def post(self,request, *arg,**kwargs):
        # serializer=PoseDetectionSerializer(data=request.data)

        # if serializer.is_valid():
        # image=serializer.validated_data['image']
        image=request.data.get('image')

        if not image:
            return Response ({'error':'Image not found'}, status=400)
        
        landmarks=estimate_pose(image.read())

        output_serializer=PoseLandmarksSerializer(data=landmarks,many=True)
        output_serializer.is_valid(raise_exception=True)

        return Response({'landmarks':output_serializer.data},status=status.HTTP_200_OK)
    

   

