

import dlib
import numpy as np
from skimage import io
import torch
import math as math
import torch.utils.data as utils
import pandas as pd
import torch.nn as nn
from Preprocessing import square_size, ob_size, round_size, oval_size, heart_size
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings("ignore")
from torch.autograd import Variable

data = []

heart = []
ob = []
oval = []
round = []
square = []

i = 1
predictor_path = r"C:\Users\OWNER\Downloads\shape_predictor_68_face_landmarks.dat"
folder_path_h = r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\heart\**.jpg"
folder_path_ob = r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\oblong\**.jpg"
folder_path_o= r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\oval\**.jpg"
folder_path_r= r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\round\**.jpg"
folder_path_s= r"C:\Users\OWNER\Desktop\FaceShapes\celebs3_squared\square\**.jpg"


detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(predictor_path)

img_h = io.imread_collection(folder_path_h)
img_ob= io.imread_collection(folder_path_ob)
img_o= io.imread_collection(folder_path_o)
img_r= io.imread_collection(folder_path_r)
img_s= io.imread_collection(folder_path_s)

def get_landmarks(image):
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
    #if len(detections) < 1:
       # data['landmarks_vestorised'] = "error"

for img in img_h:
    get_landmarks(img)

data = np.asarray(data)
print(data.shape)
heart_r = np.append(data, np.zeros((100, 1)), axis=1)
data = []


for img in img_o:
    get_landmarks(img)

data = np.asarray(data)
print(data.shape)
oval_r = np.append(data, np.ones((100, 1)), axis=1)
data = []

for img in img_ob:
    get_landmarks(img)
    
data = np.asarray(data)
print(data.shape)
ob_r = np.append(data, np.full((101, 1), 2), axis=1)
data = []


for img in img_r:
    get_landmarks(img)

data = np.asarray(data)
print(data.shape)
round_r = np.append(data, np.full((100, 1), 3), axis=1)
data = []

for img in img_s:
    get_landmarks(img)

data = np.asarray(data)
print(data.shape)
square_r = np.append(data, np.full((100, 1), 4), axis=1)
data = []

final_dlib = np.vstack((square_r,ob_r,heart_r,oval_r,round_r))
np.savetxt(r"C:\Users\OWNER\Desktop\squarer.txt", final_dlib, delimiter=',', header='1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,classes', comments = "", newline='\r\n', fmt='%.i')

