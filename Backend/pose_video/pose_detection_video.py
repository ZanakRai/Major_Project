import cv2
import mediapipe as mp
import numpy as np
import tempfile
import os



mp_pose=mp.solutions.pose
pose=mp_pose.Pose()

def estimate_pose_video(video_file):
    # save upload video to temp file
    with tempfile.NamedTemporaryFile(delete=False, suffix=' .mp4') as temp:
        for chunk in video_file.chunks():
            temp.write(chunk)
        temp_path=temp.name

    cap=cv2.VideoCapture(temp_path)
    all_landmarks=[]
    while cap.isOpened():
        success,frame=cap.read()

        if not success:
            break

        img=cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)

        result=pose.process(img)
        if result.pose_landmarks:
            landmarks=[]
            
            for id,lm in enumerate(result.pose_landmarks.landmark):
                
                print(id,lm.y)
                landmarks.append({
                    'x':lm.x,
                    'y':lm.y,
                    'z':lm.z,
                    'visibility':lm.visibility

                })
                
            all_landmarks.append({
                'landmarks':landmarks
            })
    cap.release()
    os.remove(temp_path)
    return all_landmarks