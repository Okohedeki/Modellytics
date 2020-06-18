
# -*- coding: utf-8 -*-
"""
Created on Fri Apr 20 06:53:22 2018

@author: Edeki Okoh, 4/18/2018

Using the dlib library, we can extract 68 landmark points 
"""

import dlib
import numpy as np
from skimage import io
import torch
import math as math
import torch.utils.data as utils
import pandas as pd
import torch.nn as nn
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings("ignore")
from torch.autograd import Variable

import cv2 
import numpy as np
import os
import matplotlib.pyplot as plt
import glob 

#list of counters and parameters
i = 1
top = bot = right = left = 0
scaleFactor = 1.3
minNeighbors = 3

#Empty arrays for photos 
images = []
images_1 = []

#Labels
labels = np.array([1])

#list of paths
folder_path_photos =  r'C:\Users\OWNER\Desktop\Photos\Unedited\**.jpg'

Harr_cascades_path_frontal_face = r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_frontalface_default.xml"
Harr_cascades_path_eye =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_eye.xml"
Harr_cascades_path_mouth =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_mcs_mouth.xml"


i = 1
predictor_path = r"C:\Users\OWNER\Downloads\shape_predictor_68_face_landmarks.dat"
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

data = []

heart = []
ob = []
oval = []
round = []
square = []

img_h = io.imread_collection(folder_path_h)
img_ob= io.imread_collection(folder_path_ob)
img_o= io.imread_collection(folder_path_o)
img_r= io.imread_collection(folder_path_r)
img_s= io.imread_collection(folder_path_s)


#Import photos 
#for img in glob.glob(folder_path_photos):
#    n= cv2.imread(img,0)
#    images.append(n)

# set borders for photos
#plt.figure(figsize = (100,100))


#Main loop that loops through files in folder
def get_landmarks(image):
    facePoints = face_cascade.detectMultiScale(image, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces

    #Finds the rectangles for the eye using the rectangle from the face
    #if there are no facepoints will not add photo to model, or multiple faces detected
    #if len(facePoints) != 0 and len(facePoints) < 5:
    
    for (x,y,w,h) in facePoints:
        cv2.rectangle(image,(x,y),(x+w,y+h),(255,0,0),2)
    #Crops the images      
        image = img[y-top:y+h+bot, x-left:x+w+right]

    detections = detector(image, 1)
    for k,d in enumerate(detections): #For all detected face instances individually
        shape = predictor(image, d) #Draw Facial Landmarks with the predictor class
        xlist = []
        ylist = []
        for i in range(1,68): #Store X and Y coordinates in two lists
            xlist.append(float(shape.part(i).x))
            ylist.append(float(shape.part(i).y))
        xmean = np.mean(xlist)
        ymean = np.mean(ylist)
        xcentral = [(x-xmean) for x in xlist]
        ycentral = [(y-ymean) for y in ylist]
        landmarks_vectorised = []
        for x, y, w, z in zip(xcentral, ycentral, xlist, ylist):
            landmarks_vectorised.append(w)
            landmarks_vectorised.append(z)
            meannp = np.asarray((ymean,xmean))
            coornp = np.asarray((z,w))
            dist = np.linalg.norm(coornp-meannp)
            landmarks_vectorised.append(dist)
            landmarks_vectorised.append((math.atan2(y, x)*360)/(2*math.pi))
        data.append(landmarks_vectorised)
        
    
for img in img_h:
    get_landmarks(img)

data = np.asarray(data)
height_heart, width_heart = data.shape
heart_r = np.append(data, np.zeros((height_heart, 1)), axis=1)
print(heart_r.shape)

data = []


for img in img_o:
    get_landmarks(img)

data = np.asarray(data)
height_oval, width_oval = data.shape
oval_r = np.append(data, np.ones((height_oval, 1)), axis=1)
print(oval_r.shape)

data = []

for img in img_ob:
    get_landmarks(img)
    
data = np.asarray(data)
height_ob, width_ob = data.shape 
ob_r = np.append(data, np.full((height_ob, 1), 2), axis=1)
print(ob_r.shape)


data = []


for img in img_r:
    get_landmarks(img)

data = np.asarray(data)
height_round, width_round = data.shape
round_r = np.append(data, np.full((height_round, 1), 3), axis=1)
print(round_r.shape)


data = []

for img in img_s:
    get_landmarks(img)

data = np.asarray(data)
height_square, width_square = data.shape
square_r = np.append(data, np.full((height_square, 1), 4), axis=1)
print(square_r.shape)

data = []

final_dlib = np.vstack((square_r,ob_r,heart_r,oval_r,round_r))
np.savetxt(r"C:\Users\OWNER\Desktop\squarerrr.txt", final_dlib, delimiter=',', header='1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,classes', comments = "", newline='\r\n', fmt='%.i')

