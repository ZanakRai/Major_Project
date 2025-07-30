from rest_framework import serializers



class VideoSerializer(serializers.Serializer):
    video=serializers.FileField()


class LandmarkVideoSerializers(serializers.Serializer):
    x=serializers.FloatField()
    y=serializers.FloatField()
    z=serializers.FloatField()
    visibility=serializers.FloatField()

class LandmarkFrameSerializer(serializers.Serializer):
    landmarks=LandmarkVideoSerializers(many=True)