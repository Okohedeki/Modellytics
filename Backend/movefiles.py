import shutil
import os
import pandas 
import glob as glob
import time 
from PIL import Image
import torch
from torch.autograd import Variable
import PIL.ImageOps 
import cv2
import pathlib

import sys

bad_files = []

# Get user supplied values
cascPath = r"C:\Users\Edeki Okoh1\Desktop\Modellytics\Backend\HarrCascades\haarcascade_frontalface_default.xml"
  
# Create the haar cascade
faceCascade = cv2.CascadeClassifier(cascPath)

for files in glob.glob(r'D:\SmallTest\*\*.jpg'):
        print(files)
        faceCascade = cv2.CascadeClassifier(cascPath)

        # Read the image
        image = cv2.imread(files)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # Detect faces in the image
        faces = faceCascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30)
            #flags = cv2.CV_HAAR_SCALE_IMAGE
        )

        if len(faces) != 1:
            os.remove(files)
            continue

