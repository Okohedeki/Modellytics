#Edeki Okoh
# 4/21/2018
#Facial Comparison algothrim

import cv2 
import numpy as np
import os
import matplotlib.pyplot as plt
import glob 

#from keras.utils import np_utils
#from keras.models import Sequential
#from keras.layers import Dense, Dropout, Activation


#list of counters and parameters
i = 1
top = bot = right = left = 0

#Labels
labels = np.array([1])

#list of paths
folder_path_photos =  r'C:\Users\OWNER\Desktop\Photos\Unedited\**.jpg'
folder_path_edited_photos = r"C:\Users\OWNER\Desktop\Trainning\Edit_Models"


Harr_cascades_path_frontal_face = r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_frontalface_default.xml"
Harr_cascades_path_eye =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_eye.xml"
Harr_cascades_path_mouth =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_mcs_mouth.xml"

#Classifiers
face_cascade = cv2.CascadeClassifier(Harr_cascades_path_frontal_face)
eye_cascade = cv2.CascadeClassifier(Harr_cascades_path_eye)
mouth_cascade = cv2.CascadeClassifier(Harr_cascades_path_mouth)


#Empty arrays for photos 
images = []
images_1 = []



#Import photos 
for img in glob.glob(folder_path_photos):
    n= cv2.imread(img,0)
    images.append(n)

# set borders for photos
plt.figure(figsize = (100,100))

#factors and counters
scaleFactor = 1.3
minNeighbors = 3
counter_face_points = 1
counter_writing_images = 1

#Main loop that loops through files in folder
for img in images:
        
    #Calculates the facepoints, or the points that make the rectangle of the face    
    
    facePoints = face_cascade.detectMultiScale(img, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
    
    #prints out the rectangle of the faces
    
#Finds the rectangles for the eye using the rectangle from the face
    
    #if there are no facepoints will not add photo to model, or multiple faces detected
    
    if len(facePoints) != 0 and len(facePoints) < 5:
    
        for (x,y,w,h) in facePoints:
             cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
            
   
    #Plots each image and gives it a name
        
        img = img[y-top:y+h+bot, x-left:x+w+right]
           
        plt.imshow(img)
        plt.title("Model" + str(i))
        
        plt.show()

        images_1.append(img)
        
        
        print("FacePoints Model:" + str(counter_face_points), facePoints)
         
    else:
        print("no face detected or multiple faces on Model" + str(i))
        #Various counters used in the program
    counter_face_points = counter_face_points + 1

#Saves images to desktop

for img in images_1:
    cv2.imwrite(os.path.join(folder_path_edited_photos, 'model' + str(counter_writing_images) +'.jpg'), img)
    counter_writing_images = counter_writing_images + 1
   

   
