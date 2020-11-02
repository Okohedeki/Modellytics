import torch
from DlibDataset import get_datasets
import os
import utils
import numpy as np
import glob as glob
import dlib
#from Preprocessing import data
import dlib
import math as math
import pandas as pd
from skimage import io
import torch.nn as nn
import matplotlib.pyplot as plt
import cv2
import warnings
warnings.filterwarnings("ignore")

from torch.autograd import Variable

heart_collection = []
oval_collection= []
ob_collection= []
round_collection= []
square_collection= []

top = bot = right = left = 0
scaleFactor = 1.3
minNeighbors = 3


predictor_path = r"C:\Users\OWNER\Downloads\shape_predictor_68_face_landmarks.dat"
Harr_cascades_path_frontal_face = r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_frontalface_default.xml"
Harr_cascades_path_eye =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_eye.xml"
Harr_cascades_path_mouth =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_mcs_mouth.xml"

face_cascade = cv2.CascadeClassifier(Harr_cascades_path_frontal_face)
eye_cascade = cv2.CascadeClassifier(Harr_cascades_path_eye)
mouth_cascade = cv2.CascadeClassifier(Harr_cascades_path_mouth)

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(predictor_path)


class IrisNet(nn.Module):
    
   def __init__ (self, input_size, hidden1_size, hidden2_size, num_classes):
       
#Creates the structure of the neural network and activitation function
#input_size: Number of attributes
#hidden1_size: Nodes in hidden layer 1
#hidden2_size: Nodes in hidden layer 2
#classes: Number of classes that we have, 3 in this case for Iris, Neurons in output layer
  

       super(IrisNet, self).__init__()
       self.fc1 = nn.Linear(input_size, hidden1_size)
       self.relu1 = nn.ReLU()
       #Above runs the inputs through Hidden Layer 1 from Inputs
      
       self.fc2 = nn.Linear(hidden1_size, hidden2_size)
       self.relu2 = nn.ReLU()
       #Above runs the inputs through Hidden Layer 2 from Hidden Layer 1
       
       self.fc3 = nn.Linear(hidden2_size, num_classes)
       #Above runs the output from Hidden Layer 2 into the output node, returning the class
  
   def forward(self, x):

       #
       out= self.fc1(x)
       out = self.relu1(out)
       #Pass through Hidden Layer 1

       out = self.fc2(out)
       out = self.relu2(out)
       #Pass trough Hidden Layer 2
     
       out = self.fc3(out)
       #Pass through output layer and return class
       return out

if __name__ == "__main__":


    #Data Loader
    batch_size = 10

    iris_data_file = r"C:\Users\OWNER\Desktop\68landmarks.txt"

    train_ds, test_ds = get_datasets(iris_data_file)


    #print(type(test_ds))
    #print(type(train_ds))

    #print(len(train_ds))
    #print(len(test_ds))

    train_loader = torch.utils.data.DataLoader(dataset=train_ds, batch_size=batch_size, shuffle=True)
    test_loader = torch.utils.data.DataLoader(dataset=test_ds, batch_size=batch_size, shuffle=True)

    #print(train_loader)
    #Loss Function 

    #creates model from class
    net = IrisNet(136,100,50,5)

    #Create loss function
    criterion = nn.CrossEntropyLoss()
    learning_rate = .00001
    #Size of the steps in direction of loss = learning rate

    optimizer = torch.optim.SGD(net.parameters(), lr=learning_rate, nesterov=True, momentum=.95, dampening=0)
    #net.parameters: Tells optimizer what it is searching for

    num_epoch = 50
    #epoch - presentation of data to machine learning, will be running data through loss function based on num_epoch times

    data = []
    train_loss = []
    test_loss = []
    train_accuracy = []
    test_accuracy = []

    for epoch in range(num_epoch):
        train_correct = 0
        train_total = 0

        #network is in training mode: net.train()


        for i, (items,classes) in enumerate(train_loader):

            items = Variable(items)
            classes = Variable(classes)

            
            #classes is a int, need to add check since Network expectsit to be in long format
            #print(classes.type())
            classes = classes.long()
        # print(classes.type())

            optimizer.zero_grad()
            #clears gradients from previous operation
            outputs = net(items)
            #forward pass through network
            loss = criterion(outputs,classes)
            #calculates the loss for each pass
            loss.backward()
            #Calculates the gradient using back propagation
            optimizer.step()
            #Adjust the parameters based on the gradients

        #Records correct predictions for training data
            train_total  += classes.size(0)
            _, predicted = torch.max(outputs.data, 1)
            train_correct += (predicted == classes.data).sum()

            # print('Epoch %d/%d, Iteration %d/%d, Loss:%.4f' 
            #        %(epoch+1, num_epoch, i+1, len(train_ds)//batch_size, loss.data[0]))

        net.eval()

        train_loss.append(loss.data[0])
        #given by loss=criterion(outputs,classes)

        train_accuracy.append((100*train_correct/train_total))


        test_items = torch.FloatTensor(test_ds.data.values[:, 0:136])
        test_classes = torch.LongTensor(test_ds.data.values[:,136])

        outputs = net(Variable(test_items))
        loss = criterion(outputs, Variable(test_classes))
        test_loss.append(loss.data[0])

        #REcords the testing data
        _, predicted = torch.max(outputs.data,1)
        total = test_classes.size(0)
        correct = (predicted==test_classes).sum()
        test_accuracy.append((100*correct / total))
        #Testing Accuracy

    #fig = plt.figure(figsize=(20,8))
    #plt.plot(train_loss, label='train_loss')
    #plt.plot(test_loss, label='test_loss')
    #plt.title('Train and Test Loss')
    #plt.legend()
    #plt.show()

    fig = plt.figure(figsize=(12, 8))
    plt.plot(train_accuracy, label='train accuracy')
    plt.plot(test_accuracy, label='test accuracy')
    plt.title("Train and Test Accuracy")
    plt.legend()
    plt.show()

    #Save Model


    torch.save(net.state_dict(),r"C:\Users\OWNER\Desktop\FaceShapeModel2.pht" )

    net2 = IrisNet(136,100,50,5)
    net2.load_state_dict(torch.load(r"C:\Users\OWNER\Desktop\FaceShapeModel2.pht"))
    net2.eval()

    Testing_images_1 = r'C:\Users\OWNER\Desktop\git\Faces\Facial-Similarity-with-Siamese-Networks-in-Pytorch\data\faces\testing\s5\**@2x.png'
    Testing_images_2 = r'C:\Users\OWNER\Desktop\git\Faces\Facial-Similarity-with-Siamese-Networks-in-Pytorch\data\faces\testing\s6\**@2x.png'
    Testing_images_3 = r'C:\Users\OWNER\Desktop\git\Faces\Facial-Similarity-with-Siamese-Networks-in-Pytorch\data\faces\testing\s7\**@2x.png'

    img_testing_collection_1 = io.imread_collection(Testing_images_1)
    img_testing_collection_2 = io.imread_collection(Testing_images_2)
    img_testing_collection_3 = io.imread_collection(Testing_images_3)


    for img in img_testing_collection_1:

            dets = detector(img)

            facePoints = face_cascade.detectMultiScale(img, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
            
            #prints out the rectangle of the faces

            #Finds the rectangles for the eye using the rectangle from the face
            #if there are no facepoints will not add photo to model, or multiple faces detected
            #if len(facePoints) != 0 and len(facePoints) < 5:
            
            for (x,y,w,h) in facePoints:
                cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)

            for k, d in enumerate(dets):
                shape = predictor(img, d)

            vec = np.empty([68, 2], dtype = int)
            for b in range(68):
                vec[b][0] = shape.part(b).x
                vec[b][1] = shape.part(b).y
            vec.astype(int)
            data.append(vec)
            data = np.asarray(data)
            data = np.transpose(np.asarray(data).ravel())
            data = [data[i:i+136] for i in range(0, len(data), 136)]
            test_pic = np.asarray(data)
            
            print(test_pic.shape)
            output2 = net2(Variable(torch.FloatTensor(test_pic)))
            _, predicted_class = torch.max(output2.data,1)
            print('Predicted class:', predicted_class.numpy()[0])

            if predicted_class == 0:
                cv2.imshow('class 0',img)
                cv2.waitKey(0)
                square_collection.append(test_pic)
            elif predicted_class == 1:
                cv2.imshow('class 1',img)
                cv2.waitKey(0)
                ob_collection.append(test_pic)
            elif predicted_class == 2:
                cv2.imshow('class 2',img)
                cv2.waitKey(0)
                heart_collection.append(test_pic)
            elif predicted_class == 3:
                cv2.imshow('class 3',img)
                cv2.waitKey(0)
                round_collection.append(test_pic)
            else:
                cv2.imshow('class 4',img)
                cv2.waitKey(0)
                oval_collection.append(test_pic)
            
            data = []

    for img in img_testing_collection_2:

            dets = detector(img)

            facePoints = face_cascade.detectMultiScale(img, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
            
            #prints out the rectangle of the faces

            #Finds the rectangles for the eye using the rectangle from the face
            #if there are no facepoints will not add photo to model, or multiple faces detected
            #if len(facePoints) != 0 and len(facePoints) < 5:
            
            for (x,y,w,h) in facePoints:
                cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)

            for k, d in enumerate(dets):
                shape = predictor(img, d)

            vec = np.empty([68, 2], dtype = int)
            for b in range(68):
                vec[b][0] = shape.part(b).x
                vec[b][1] = shape.part(b).y
            vec.astype(int)
            data.append(vec)
            data = np.asarray(data)
            data = np.transpose(np.asarray(data).ravel())
            data = [data[i:i+136] for i in range(0, len(data), 136)]
            test_pic = np.asarray(data)
            
            print(test_pic.shape)
            output2 = net2(Variable(torch.FloatTensor(test_pic)))
            _, predicted_class = torch.max(output2.data,1)
            print('Predicted class:', predicted_class.numpy()[0])

            if predicted_class == 0:
                cv2.imshow('class 0',img)
                cv2.waitKey(0)
                square_collection.append(test_pic)
            elif predicted_class == 1:
                cv2.imshow('class 1',img)
                cv2.waitKey(0)
                ob_collection.append(test_pic)
            elif predicted_class == 2:
                cv2.imshow('class 2',img)
                cv2.waitKey(0)
                heart_collection.append(test_pic)
            elif predicted_class == 3:
                cv2.imshow('class 3',img)
                cv2.waitKey(0)
                round_collection.append(test_pic)
            else:
                cv2.imshow('class 4',img)
                cv2.waitKey(0)
                oval_collection.append(test_pic)
            
            data = []

    for img in img_testing_collection_3:


            dets = detector(img)

            facePoints = face_cascade.detectMultiScale(img, scaleFactor=scaleFactor, minNeighbors = minNeighbors, flags=cv2.CASCADE_SCALE_IMAGE)
            
            #prints out the rectangle of the faces

            #Finds the rectangles for the eye using the rectangle from the face
            #if there are no facepoints will not add photo to model, or multiple faces detected
            #if len(facePoints) != 0 and len(facePoints) < 5:
            
            for (x,y,w,h) in facePoints:
                cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)

            for k, d in enumerate(dets):
                shape = predictor(img, d)

            vec = np.empty([68, 2], dtype = int)
            for b in range(68):
                vec[b][0] = shape.part(b).x
                vec[b][1] = shape.part(b).y
            vec.astype(int)
            data.append(vec)
            data = np.asarray(data)
            data = np.transpose(np.asarray(data).ravel())
            data = [data[i:i+136] for i in range(0, len(data), 136)]
            test_pic = np.asarray(data)
            
            print(test_pic.shape)
            output2 = net2(Variable(torch.FloatTensor(test_pic)))
            _, predicted_class = torch.max(output2.data,1)
            print('Predicted class:', predicted_class.numpy()[0])

            if predicted_class == 0:
                cv2.imshow('class 0',img)
                cv2.waitKey(0)
                square_collection.append(test_pic)
            elif predicted_class == 1:
                cv2.imshow('class 1',img)
                cv2.waitKey(0)
                ob_collection.append(test_pic)
            elif predicted_class == 2:
                cv2.imshow('class 2',img)
                cv2.waitKey(0)
                heart_collection.append(test_pic)
            elif predicted_class == 3:
                cv2.imshow('class 3',img)
                cv2.waitKey(0)
                round_collection.append(test_pic)
            else:
                cv2.imshow('class 4',img)
                cv2.waitKey(0)
                oval_collection.append(test_pic)
            
            data = []

    #output2 = net2(Variable(torch.FloatTensor(test_pic)))

    ##_, predicted_class = torch.max(output2.data,1)
    #print('Predicted class:', predicted_class.numpy()[0])

    #Obama_Look_Alike = r'C:\Users\OWNER\Desktop\Photos\Unedited\BarackObama.jpg'
    #img_testing_collection = io.imread_collection(Obama_Look_Alike)



    i = 0

    #for img in img_testing_collection:
    #    get_landmarks(img)
    #data = np.asarray(data)
    #print(data)
    #data = np.delete(data,-1)
    #print(data.shape)
    #output2 = net2(Variable(torch.FloatTensor(test_pic)))
    #_, predicted_class = torch.max(output2.data,1)
    #print(predicted_class)    

    #print("Len H," + heart_collection + "Len Oval," + oval_collection + "Len ob," + ob_collection + "len round," + round_collection + "Len square," + square_collection)
