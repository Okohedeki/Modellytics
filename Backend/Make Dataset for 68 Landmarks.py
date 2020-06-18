
# -*- coding: utf-8 -*-
"""
Created on Fri Apr 20 06:53:22 2018

@author: Edeki Okoh, 4/18/2018

Using the dlib library, we can extract 68 landmark points 
"""

import dlib
import cv2
import numpy as np
from skimage import io
import torch
import torch.utils.data as utils
import math as math
import pandas as pd
import torch.nn as nn
#from Preprocessing import square_size, ob_size, round_size, oval_size, heart_size
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings("ignore")
from torch.autograd import Variable

predictor_path = r"C:\Users\OWNER\Downloads\shape_predictor_68_face_landmarks.dat"
Harr_cascades_path_frontal_face = r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_frontalface_default.xml"
Harr_cascades_path_eye =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_eye.xml"
Harr_cascades_path_mouth =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_mcs_mouth.xml"

folder_path_h = r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\heart\**.jpg"
folder_path_ob = r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\oblong\**.jpg"
folder_path_o= r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\oval\**.jpg"
folder_path_r= r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\round\**.jpg"
folder_path_s= r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\square\**.jpg"

#Classifiers
face_cascade = cv2.CascadeClassifier(Harr_cascades_path_frontal_face)
eye_cascade = cv2.CascadeClassifier(Harr_cascades_path_eye)
mouth_cascade = cv2.CascadeClassifier(Harr_cascades_path_mouth)

#Detector and Predictor Module 
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(predictor_path)


heart = []
ob = []
oval = []
round = []
square = []

i = 1
top = bot = right = left = 0
scaleFactor = 1.3
minNeighbors = 3




img_h = io.imread_collection(folder_path_h)
img_ob= io.imread_collection(folder_path_ob)
img_o= io.imread_collection(folder_path_o)
img_r= io.imread_collection(folder_path_r)
img_s= io.imread_collection(folder_path_s)

#for img in img_h:
 #   get_landmarks(img)

for images in img_h:
    facePoints = face_cascade.detectMultiScale(images, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces

    #Finds the rectangles for the eye using the rectangle from the face
    #if there are no facepoints will not add photo to model, or multiple faces detected
    #if len(facePoints) != 0 and len(facePoints) < 5:
    
    for (x,y,w,h) in facePoints:
        cv2.rectangle(images,(x,y),(x+w,y+h),(255,0,0),2)
    #Crops the images      
        images = images[y-top:y+h+bot, x-left:x+w+right]
    dets = detector(images)

#output face landmark points inside retangle
#shape is points datatype

    for k, d in enumerate(dets):
        shape = predictor(images, d)

    vec = np.empty([68, 2], dtype = int)
    for b in range(68):
        vec[b][0] = shape.part(b).x
        vec[b][1] = shape.part(b).y
    vec.astype(int)
    heart.append(vec)
   
for images in img_ob:

    facePoints = face_cascade.detectMultiScale(images, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces

    #Finds the rectangles for the eye using the rectangle from the face
    #if there are no facepoints will not add photo to model, or multiple faces detected
    #if len(facePoints) != 0 and len(facePoints) < 5:
    
    for (x,y,w,h) in facePoints:
        cv2.rectangle(images,(x,y),(x+w,y+h),(255,0,0),2)
    #Crops the images      
        images = images[y-top:y+h+bot, x-left:x+w+right]
    dets = detector(images)

#output face landmark points inside retangle
#shape is points datatype

    for k, d in enumerate(dets):
        shape = predictor(images, d)

    vec = np.empty([68, 2], dtype = int)
    for b in range(68):
        vec[b][0] = shape.part(b).x
        vec[b][1] = shape.part(b).y
    vec.astype(int)
    ob.append(vec)

for images in img_o:

    facePoints = face_cascade.detectMultiScale(images, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces

    #Finds the rectangles for the eye using the rectangle from the face
    #if there are no facepoints will not add photo to model, or multiple faces detected
    #if len(facePoints) != 0 and len(facePoints) < 5:
    
    for (x,y,w,h) in facePoints:
        cv2.rectangle(images,(x,y),(x+w,y+h),(255,0,0),2)
    #Crops the images      
        images = images[y-top:y+h+bot, x-left:x+w+right]
    dets = detector(images)

#output face landmark points inside retangle
#shape is points datatype

    for k, d in enumerate(dets):
        shape = predictor(images, d)

    vec = np.empty([68, 2], dtype = int)
    for b in range(68):
        vec[b][0] = shape.part(b).x
        vec[b][1] = shape.part(b).y
    vec.astype(int)
    oval.append(vec)

for images in img_r:

    facePoints = face_cascade.detectMultiScale(images, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces

    #Finds the rectangles for the eye using the rectangle from the face
    #if there are no facepoints will not add photo to model, or multiple faces detected
    #if len(facePoints) != 0 and len(facePoints) < 5:
    
    for (x,y,w,h) in facePoints:
        cv2.rectangle(images,(x,y),(x+w,y+h),(255,0,0),2)
    #Crops the images      
        images = images[y-top:y+h+bot, x-left:x+w+right]
    
    dets = detector(images)

#output face landmark points inside retangle
#shape is points datatype

    for k, d in enumerate(dets):
        shape = predictor(images, d)

    vec = np.empty([68, 2], dtype = int)
    for b in range(68):
        vec[b][0] = shape.part(b).x
        vec[b][1] = shape.part(b).y
    vec.astype(int)
    round.append(vec)

for images in img_s:

    facePoints = face_cascade.detectMultiScale(images, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces

    #Finds the rectangles for the eye using the rectangle from the face
    #if there are no facepoints will not add photo to model, or multiple faces detected
    #if len(facePoints) != 0 and len(facePoints) < 5:
    
    for (x,y,w,h) in facePoints:
        cv2.rectangle(images,(x,y),(x+w,y+h),(255,0,0),2)
    #Crops the images      
        images = images[y-top:y+h+bot, x-left:x+w+right]
    dets = detector(images)

#output face landmark points inside retangle
#shape is points datatype

    for k, d in enumerate(dets):
        shape = predictor(images, d)

    vec = np.empty([68, 2], dtype = int)
    for b in range(68):
        vec[b][0] = shape.part(b).x
        vec[b][1] = shape.part(b).y
    vec.astype(int)
    square.append(vec)

square_r = np.transpose(np.asarray(square).ravel())
square_r = [square_r[i:i+136] for i in range(0, len(square_r), 136)]
square_r = np.asarray(square_r)
square_r = np.append(square_r, np.zeros((100, 1)), axis=-1)

ob_r = np.transpose(np.asarray(ob).ravel())
ob_r = [ob_r[i:i+136] for i in range(0, len(ob_r), 136)]
ob_r = np.append(ob_r, np.ones((100, 1)), axis=-1)

heart_r = np.transpose(np.asarray(heart).ravel())
heart_r = [heart_r[i:i+136] for i in range(0, len(heart_r), 136)]
heart_r = np.append(heart_r, np.full((100, 1), 2), axis=-1)

round_r = np.transpose(np.asarray(round).ravel())
round_r = [round_r[i:i+136] for i in range(0, len(round_r), 136)]
round_r = np.append(round_r, np.full((100, 1),3), axis=-1)

oval_r = np.transpose(np.asarray(oval).ravel())
oval_r = [oval_r[i:i+136] for i in range(0, len(oval_r), 136)]
oval_r = np.append(oval_r, np.full((100, 1),4), axis=-1)

print(square_r.size)
print(ob_r.size)
print(heart_r.size)
print(round_r.size)
print(oval_r.size)
columns = ["part_0_x,part_0_y,part_1_x,part_1_y,part_2_x,part_2_y,part_3_x,part_3_y,part_4_x,part_4_y,part_5_x,part_5_y,part_6_x,part_6_y,part_7_x,part_7_y,part_8_x,part_8_y,part_9_x,part_9_y,part_10_x,part_10_y,part_11_x,part_11_y,part_12_x,part_12_y,part_13_x,part_13_y,part_14_x,part_14_y,part_15_x,part_15_y,part_16_x,part_16_y,part_17_x,part_17_y,part_18_x,part_18_y,part_19_x,part_19_y,part_20_x,part_20_y,part_21_x,part_21_y,part_22_x,part_22_y,part_23_x,part_23_y,part_24_x,part_24_y,part_25_x,part_25_y,part_26_x,part_26_y,part_27_x,part_27_y,part_28_x,part_28_y,part_29_x,part_29_y,part_30_x,part_30_y,part_31_x,part_31_y,part_32_x,part_32_y,part_33_x,part_33_y,part_34_x,part_34_y,part_35_x,part_35_y,part_36_x,part_36_y,part_37_x,part_37_y,part_38_x,part_38_y,part_39_x,part_39_y,part_40_x,part_40_y,part_41_x,part_41_y,part_42_x,part_42_y,part_43_x,part_43_y,part_44_x,part_44_y,part_45_x,part_45_y,part_46_x,part_46_y,part_47_x,part_47_y,part_48_x,part_48_y,part_49_x,part_49_y,part_50_x,part_50_y,part_51_x,part_51_y,part_52_x,part_52_y,part_53_x,part_53_y,part_54_x,part_54_y,part_55_x,part_55_y,part_56_x,part_56_y,part_57_x,part_57_y,part_58_x,part_58_y,part_59_x,part_59_y,part_60_x,part_60_y,part_61_x,part_61_y,part_62_x,part_62_y,part_63_x,part_63_y,part_64_x,part_64_y,part_65_x,part_65_y,part_66_x,part_66_y,part_67_x,part_67_y, classes"]
#print(len(columns))


final_dlib = np.vstack((square_r,ob_r,heart_r,oval_r,round_r))
np.savetxt(r"C:\Users\OWNER\Desktop\68landmarks.txt", final_dlib, delimiter=',', header = "part_0_x,part_0_y,part_1_x,part_1_y,part_2_x,part_2_y,part_3_x,part_3_y,part_4_x,part_4_y,part_5_x,part_5_y,part_6_x,part_6_y,part_7_x,part_7_y,part_8_x,part_8_y,part_9_x,part_9_y,part_10_x,part_10_y,part_11_x,part_11_y,part_12_x,part_12_y,part_13_x,part_13_y,part_14_x,part_14_y,part_15_x,part_15_y,part_16_x,part_16_y,part_17_x,part_17_y,part_18_x,part_18_y,part_19_x,part_19_y,part_20_x,part_20_y,part_21_x,part_21_y,part_22_x,part_22_y,part_23_x,part_23_y,part_24_x,part_24_y,part_25_x,part_25_y,part_26_x,part_26_y,part_27_x,part_27_y,part_28_x,part_28_y,part_29_x,part_29_y,part_30_x,part_30_y,part_31_x,part_31_y,part_32_x,part_32_y,part_33_x,part_33_y,part_34_x,part_34_y,part_35_x,part_35_y,part_36_x,part_36_y,part_37_x,part_37_y,part_38_x,part_38_y,part_39_x,part_39_y,part_40_x,part_40_y,part_41_x,part_41_y,part_42_x,part_42_y,part_43_x,part_43_y,part_44_x,part_44_y,part_45_x,part_45_y,part_46_x,part_46_y,part_47_x,part_47_y,part_48_x,part_48_y,part_49_x,part_49_y,part_50_x,part_50_y,part_51_x,part_51_y,part_52_x,part_52_y,part_53_x,part_53_y,part_54_x,part_54_y,part_55_x,part_55_y,part_56_x,part_56_y,part_57_x,part_57_y,part_58_x,part_58_y,part_59_x,part_59_y,part_60_x,part_60_y,part_61_x,part_61_y,part_62_x,part_62_y,part_63_x,part_63_y,part_64_x,part_64_y,part_65_x,part_65_y,part_66_x,part_66_y,part_67_x,part_67_y, classes", comments = "", newline='\r\n', fmt='%.i')



