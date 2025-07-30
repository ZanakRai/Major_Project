from PIL import Image
import cv2
import numpy as np
import mediapipe as mp
import io

mp_pose=mp.solutions.pose
pose=mp_pose.Pose(static_image_mode=True)

def estimate_pose(image_byte):
    img=Image.open(io.BytesIO(image_byte)).convert('RGB')
    img_np=np.array(img)
    result=pose.process(img_np)

    landmarks=[]

    if result.pose_landmarks:
        for lm in result.pose_landmarks.landmark:
            landmarks.append({
                'x':lm.x,
                'y':lm.y,
                'z':lm.z,
                'visibility':lm.visibility
            })

    return landmarks