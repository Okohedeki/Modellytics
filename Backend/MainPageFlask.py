## cd C:\Users\OWNER\Desktop\git\Modelytics Repo\Website Modelytics 
## run celery worker  

#FOr Design Preference https://www.paypal.com/us/home


import sys
import uuid 
import numpy as np
import stripe
from flask_mail import Mail, Message
from flask_paginate import Pagination, get_page_parameter

###Make a function to check if session confirmed is there and user is allowed to visit sitel


# sys.path.append(r"C:\Users\OWNER\AppData\Local\Programs\Python\Python37-32\Lib\site-packages")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\DLLs")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\lib")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\lib\\site-packages")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\lib\\site-packages\\Sphinx-1.5.6-py3.6.egg")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\lib\\site-packages\\win32")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\lib\\site-packages\\win32\\lib")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\lib\\site-packages\\Pythonwin")
# sys.path.remove("C:\\Users\\OWNER\\Anaconda3\\python36.zip")



#Need to only import specific modules not entire package to help speed up 
import os
import cv2
import pymysql.cursors
import base64
from base64 import b64decode
import torch
import io
from io import BytesIO
from PIL import Image
import torchvision.datasets as dset
from torch.utils.data import DataLoader,Dataset
import torchvision.transforms as transforms
import time
from urllib.parse import quote
from FacialSimilarity import net2, Variable, SiameseNetwork, SiameseNetworkDataset
import torch.nn.functional as F
from os import listdir
from os.path import isfile, join
from celery.utils.log import get_task_logger
from CropFace import get_facial_color, get_colour_name, closest_colour, prety_print_data, extractDominantColor, getColorInformation, removeBlack, extractSkin
from itsdangerous import URLSafeTimedSerializer
from Dlib_Classifier import IrisNet
import dlib

net3 = IrisNet(136,100,50,5)
net3.load_state_dict(torch.load(r"C:\Users\OWNER\Desktop\FaceShapeModel2.pht"))
net3.eval()


logger = get_task_logger(__name__)

# from client1 import SightengineClient
# client = SightengineClient('1885684933', 'yn2UbQZc5y67ZPHPnFqM')
# output = client.check('nudity','wad','celebrities','offensive','faces','scam','face-attributes','text').set_url('https://d3m9459r9kwism.cloudfront.net/img/examples/example7.jpg')
    

from werkzeug.utils import secure_filename
from flask import Flask, render_template, request, flash, redirect, url_for, session, logging, jsonify, abort
from flask_mysqldb import MySQL
from flask_wtf import Form
from wtforms import StringField, TextAreaField, SelectField, DateField,  PasswordField, IntegerField, RadioField, validators, SubmitField, FileField
from wtforms.widgets import TextArea
from wtforms.fields.html5 import URLField
from wtforms.validators import InputRequired, DataRequired
from passlib.hash import sha256_crypt
from functools import wraps

import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)

#Used to run Neural Network against all users in city or zip in the background
## cd C:\Users\OWNER\Desktop\git\Modelytics Repo\Website Modelytics 
## run celery worker python -m MainPageFlask
##
#celery -A MainPageFlask.celery worker -E -P=eventlet --loglevel =DEBUG 
#celery -A MainPageFlask.celery worker -E -P=eventlet -l DEBUG
##celery -A MainPageFlask.celery worker -l DEBUG -c 1 -E

##Run Celery celery -A MainPageFlask.celery worker 
##Run Flower celery flower -A MainPageFlask.celery worker --address=127.0.0.1 --port=5555
##Run workers with pool celery worker --app=worker.app --pool=gevent --concurreny=500
from celery import Celery
from celery.execute import send_task
from celery.bin import worker
from celery import current_app    

#Email Verification import from token.py
# from token_file import generate_confirmation_token, confirm_token
#from email_file import send_email

Harr_cascades_path_frontal_face = r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_frontalface_default.xml"
Harr_cascades_path_eye =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_eye.xml"
Harr_cascades_path_mouth =  r"C:\Users\OWNER\Desktop\opencv-2.4.11\data\haarcascades\haarcascade_mcs_mouth.xml"

face_cascade = cv2.CascadeClassifier(Harr_cascades_path_frontal_face)
eye_cascade = cv2.CascadeClassifier(Harr_cascades_path_eye)
mouth_cascade = cv2.CascadeClassifier(Harr_cascades_path_mouth)

top = bot = right = left = 0
scaleFactor = 1.3
minNeighbors = 3

app = Flask(__name__)

app.config['CELERY_BROKER_URL'] = 'redis://localhost:6379/0'
app.config['CELERY_RESULT_BACKEND'] = 'redis://localhost:6379/0'


celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'], backend=app.config['CELERY_RESULT_BACKEND'])

#Needed for email regristration
app.config['SECURITY_PASSWORD_SALT'] = 'secret_key_123'


app.url_map.strict_slashes = False

upload_folder = r'C:\Users\OWNER\Desktop\git\Modelytics Repo\Website Modelytics\static\Profile_Images'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

#Checking to make sure photos are good to upload

#Set up upload folder
app.config['UPLOAD_FOLDER'] = upload_folder
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

app.config.update(dict(
    DEBUG = True,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USE_SSL = False,
    MAIL_USERNAME = 'okohedeki@gmail.com',
    MAIL_PASSWORD = 'Kuraishokmon1',
    MAIL_DEFAULT_SENDER = 'DoNotReply@modellytics.com',
    STRIPE_SECRET_KEY = 'sk_test_3yizMrxtyjfl3BCyJvAEkzDH00fUGBdTs6',
    STRIPE_PUBLIC_KEY = 'pk_test_9Fkcbxdas7D6BffpCEYdwdWj00B14SNyae'

))

stripe.api_key = app.config['STRIPE_SECRET_KEY']

products = [
    {
        'id': 1,
        'name': 'Gold',
        'description': 'Modellytics-Gold',
        'amount': 1000,
        'plan_id':'prod_FwKvs3j9Hld2D5'
    },
    {
        'id': 2,
        'name': 'Modellytics',
        'description': 'Enteprise',
        'amount': 2500,
        'plan_id': 'prod_FwKwefqa32IJj9'
    },
]

def get_product(product_id):
    for product in products:
        if product['id'] == product_id:
            return product
    return False



mail = Mail(app)


# mail accounts

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


#Set up MySQL

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'Okohedeki'
app.config['MYSQL_PASSWORD'] = 'MenalisA124$'
app.config['MYSQL_DB'] = 'Modellytics'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

connection = pymysql.connect(host="localhost",    
                    user="Okohedeki",         
                    db='Modellytics',
                    password="MenalisA124$",
                    charset='utf8mb4',
                    cursorclass=pymysql.cursors.DictCursor) 


#initialize MySQL

mysql = MySQL(app)

class SliceableDict(dict):
    default = None
    def __getitem__(self, key):
        if isinstance(key, list):   # use one return statement below
            # uses default value if a key does not exist
            return {k: self.get(k, self.default) for k in key}
            # raises KeyError if a key does not exist
            return {k: self[k] for k in key}
            # omits key if it does not exist
            return {k: self[k] for k in key if k in self}
        return dict.get(self, key)

def get_users(data, offset=0, per_page=10):
    print(data)
    data = SliceableDict(data)
    return data[[offset, offset+per_page]]

def generate_confirmation_token(email):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    return serializer.dumps(email, salt=app.config['SECURITY_PASSWORD_SALT'])


def confirm_token(token, expiration=3600):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    try:
        email = serializer.loads(
            token,
            salt=app.config['SECURITY_PASSWORD_SALT'],
            max_age=expiration
        )
    except:
        return False
    return email

def send_email(to, subject, template):
    msg = Message(
        subject,
        recipients=[to],
        html=template,
        sender=app.config['MAIL_DEFAULT_SENDER']
    )
    mail.send(msg)



#Check if agency logged in to access dashboard
def is_logged_in_agency(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)

        else:
            flash('Unauthorized Access, Please Log In', 'danger')
            return redirect(url_for('login'))
    
    return wrap

def is_logged_in_user(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)

        else:
            flash('Unauthorized Access, Please Log In', 'danger')
            return redirect(url_for('login'))
    return wrap

@app.errorhandler(404)
def page_not_found_404(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404

@app.errorhandler(403)
def page_not_found_403(e):
    # note that we set the 404 status explicitly
    return render_template('403.html'), 403

@app.errorhandler(500)
def page_not_found_500(e):
    # note that we set the 404 status explicitly
    return render_template('500.html'), 500

#default for home page
@app.route('/')
def index():
    return render_template('Home.html')

#redirect to how it works page on home page
@app.route('/how_it_works')
def how_it_works():
    return render_template('how_it_works.html')

#redirect to meet the team page on home page
@app.route('/meet_the_team')
def meet_the_team():
    return render_template('meet_the_team.html')

#Redirect to contact us page on website
@app.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')

#First Register Form - Redirects to person or agency register form
@app.route('/register')
def register():
    return render_template('register.html')

#First Login Form - Redirects to person or agency Login form
@app.route('/login')
def login():
    return render_template('login.html')

#Class for login form for People
class RegisterFormPeople(Form):

    def __init__(self, *args, **kwargs):
        kwargs['csrf_enabled'] = False
        super(RegisterFormPeople, self).__init__(*args, **kwargs),

    #Name for registration, min 1 character max 50
    name = StringField('Name', [validators.Length(min=1, max=100)])
    username = StringField('Username', [validators.Length(min=8, max=100)])
    email = StringField('Email', [validators.Length(min=6, max=100)])
    height = IntegerField('height',  [validators.required()])
    weight = IntegerField('Weight',  [validators.required()])
    ethnicity = StringField('Ethnicity', [validators.Length(min=1, max=50)])
    BirthDate = DateField('Birth Date',  [validators.required()])
    gender = SelectField('Gender', coerce = str, choices = [('0', 'Please Select'), ('Male', 'Male'), ('Female','Female'),('Other', 'Other')])
    City = StringField('City', [validators.Length(min=1, max=100)])
    State = StringField('State', [validators.Length(min=1, max=100)])
    Zip = StringField('Zip', [validators.Length(min=1, max=100)])


    Resume = FileField()
    password = PasswordField('Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Password do not match')
                                        ])
    confirm = PasswordField('Confirm Password')

@app.route('/register_users', methods=['GET', 'POST'])
def register_users():
    form = RegisterFormPeople(request.form)
    print("Started Root")
    if request.method == 'POST':
        print('form validated')

        flash(f'Account created for {form.username.data}!', 'success')
        name = form.name.data
        email = form.email.data
        print('email')
        print(email)
        username = form.username.data
        password = sha256_crypt.encrypt(str(form.password.data))
        height = form.height.data
        weight = form.weight.data
        ethnicity = form.ethnicity.data
        BirthDate = form.BirthDate.data
        gender = form.gender.data
        Resume = form.Resume.data
        city = form.City.data
        state = form.State.data
        Zip = form.Zip.data
        Confrimed = '0'

        with connection.cursor() as cursor:
            print('Started Regristration')
            # Create a new record
            sql = "INSERT INTO users(name, email, username, password, height, weight, ethnicity, BirthDate, Resume, gender, city, state, zip, confirmed) VALUES(%s, \
                %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (name, email, username, password, height, weight, ethnicity, BirthDate, Resume, gender, city, state, Zip, Confrimed))

            #connection is not autocommit by default. So you must commit to save
            #your changes.

            sql2 = "INSERT INTO User_Demographics(username, height, weight, ethnicity, BirthDate, Gender, Resume) VALUES(%s, \
                %s, %s, %s, %s, %s, %s )"
            cursor.execute(sql2, (username, height, weight, ethnicity, BirthDate, gender, Resume))


            cursor.close()
            print('Before Token')

            token = generate_confirmation_token(email)
            print('After Token')
            print(token)
            confirm_url = url_for('email_confirmation', token=token, _external=True)
            html = render_template('activate.html', confirm_url=confirm_url)
            subject = "Please confirm your email"
            send_email(email, subject, html)

            connection.commit()


            flash('A confirmation email has been sent via email.', 'success')

        return render_template('check_email.html')
    return render_template('register_users.html', form=form)


@app.route('/email_confirmation/<token>')
@is_logged_in_user
def email_confirmation(token):
    username = session['username']
    print(username)
    try:
        email = confirm_token(token)
        print(email)
    except:
        flash('The confirmation link is invalid or has expired.', 'danger')
    with connection.cursor() as cursor:
        sql = 'SELECT * FROM users WHERE username = %s'
        print('user info')
        result = cursor.execute(sql, (username,))
        if result > 0:
            user_info = cursor.fetchone()
            confirmed = user_info['confirmed']
            print(confirmed)
            if confirmed == '1':
            
                flash('Account already confirmed. Please login.', 'success')
                cursor.close()
                return redirect(url_for('dashboard_users'))
        
                # Create a new record
            elif confirmed == '0':
                sql2 = 'UPDATE Users Set Confirmed = %s WHERE username = %s'
                cursor.execute(sql2, ("1", username))
                connection.commit()
                cursor.close()
                

            flash('You have confirmed your account. Thanks!', 'success')
            return redirect(url_for('dashboard_users'))
    return render_template('email_confirmation.html')

#user login
@app.route('/login_users', methods=['GET', 'POST'])
def login_users():
    if request.method == 'POST':
        #Get form fields
        username = request.form['username']
        password_candidate = request.form['password']

        #Cursor 

        with connection.cursor() as cursor:
            # Create a new record
            sql = 'SELECT * FROM users WHERE username = %s'
            result = cursor.execute(sql, ([username]))

            if result > 0:
                # Get stored hash

                data = cursor.fetchone()
                password = data['password']

                    #compare passwords

                if sha256_crypt.verify(password_candidate, password):
                    #Create session for user
                    
                    session['logged_in'] = True
                    session['username'] = username

                    ### Need to do a query to make sure that they are confirmed 
                    if data['confirmed'] == '1':
                        session['confirmed'] = '1'

                    flash('You are now logged in', 'success')
                    return redirect(url_for('dashboard_users'))
                
                #close the session
                    cursor.close()
                
                else:
                    error = 'invalid login'
                    cursor.close()
                    return render_template('login_users.html', error = error)

            else:
                error = 'Username not found'
                return render_template('login_users.html', error = error)
    return render_template('login_users.html')
        

@app.route('/dashboard_users_edit_info', methods=['GET', 'POST'])
@is_logged_in_user
def dashboard_users_edit_info():

    if  request.method == "POST":
                                        
        name = request.form.get('name')
        height = request.form.get('height')
        weight = request.form.get('weight')
        ethnicity = request.form.get('ethnicity')
        Age = request.form.get('Age')
        gender = request.form.get('gender')
        Resume = request.form.get('Resume')
        About_ME = request.form.get('About_ME')
        # Create Cursor

        with connection.cursor() as cursor:
            # Create a new record
            sql = "UPDATE users SET name=%s,height=%s,weight=%s,ethnicity=%s,Age=%s,gender=%s,Resume=%s,About_Me=%s WHERE username = %s"
            cursor.execute(sql, (name,height,weight,ethnicity,Age,gender,Resume,About_ME, session['username']))

            #connection is not autocommit by default. So you must commit to save
            #your changes.
            connection.commit()

            cursor.close()

            flash('Info Updated', 'success')

            return redirect(url_for('dashboard_users'))

    #else:
    #    print('Validate on Submit Fucking Up')

    return render_template('dashboard_users_edit_info.html') 


@app.route('/users_upload_photos', methods=['POST', 'GET'])
@is_logged_in_user
def users_upload_photos():

    #Need to add a message if they press upload without selecting an image first signtengine sucks


    invalidImage = False


    if request.method == 'POST':
        data = []
        username = session['username']
        file = request.files['image']

        directory = app.config['UPLOAD_FOLDER'] + '\\' + username
        print(directory)

        if not os.path.exists(directory):
            os.makedirs(directory)
        filename = os.path.join(directory, username + '_' + file.filename )

        relative_filename = str(file.filename)
    
        file.save(filename)

        dominany_photo = cv2.imread(filename,1)
        dominant_color = get_facial_color(dominany_photo)
        print("dominant_color: "+dominant_color)
        img = dominany_photo

        detector = dlib.get_frontal_face_detector()
        predictor = dlib.shape_predictor(r"C:\Users\OWNER\Downloads\shape_predictor_68_face_landmarks.dat")

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
        
        output2 = net3(Variable(torch.FloatTensor(test_pic)))
        _, predicted_class = torch.max(output2.data,1)
        print('Predicted class:', predicted_class.numpy()[0])
 
        #Saving images as base64 then using datauri on dashboard_users to see the image. UNfortunantely this sucks for many reasons so may need 
        #TO Save Images to a disk in the future
        encoded_image = base64.b64encode(open(filename, "rb").read()).decode()

        data_url = 'data:image/jpeg;base64,{}'.format((encoded_image))
        #f = open(r'C:\Users\OWNER\Desktop\TestImage.txt', 'w')
        #f.write(data_url)
        #f.close()   

        #        data_url = 'data:image/png;base64,{}'.format(quote(data))
        with connection.cursor() as cursor:
            # Create a new record
            sql = "UPDATE users SET Photo1=%s WHERE username = %s"
            cursor.execute(sql, (data_url, username))

            sql2 = "UPDATE User_Demographics set skintone = %s, faceshape = %s where username =%s"
            cursor.execute(sql2, (dominant_color, float(predicted_class.numpy()[0]), username))

            #connection is not autocommit by default. So you must commit to save
            #your changes.
            connection.commit()

            cursor.close()

        if invalidImage:
            os.remove(filename)
            print('removed photo')
        else:
            return redirect(url_for('dashboard_users'))

        

    return render_template('users_upload_photos.html', invalidImage=invalidImage, init=True)

#Class login in form for Agencies
class RegisterFormAgencies(Form):
    #Name for registration, min 1 character max 50
    #Exchange phone for URL for company in future 
    #String represent how it will be viewed on the webpage
    company_name = StringField('company name', [validators.Length(min=1, max=50)])
    email = StringField('email', [validators.Length(min=1, max=50)])
    Type_Of_Job = StringField('Type of Job', [validators.Length(min=1, max=25)])
    phone = IntegerField('Phone', [validators.required()])
    employee_count = IntegerField('employee count', [validators.required()])
    address = StringField('address', [validators.Length(min=1, max=400)])
    city = StringField('city', [validators.Length(min=1, max=400)])
    state = StringField('state', [validators.Length(min=1, max=2)])
    zip_code = IntegerField('zip code',[validators.required()])
    country = StringField('country', [validators.Length(min=1, max=400)])
    password = PasswordField('Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Password do not match')
                                        ])
    confirm = PasswordField('Confirm Password')



@app.route('/register_agencies', methods=['GET', 'POST'])
def register_agencies():
    form = RegisterFormAgencies(request.form)
    if request.method == 'POST' and form.validate():

        #Company name will be the username for agencies 
        company_name = form.company_name.data
        email = form.email.data
        password = sha256_crypt.encrypt(str(form.password.data))
        Type_Of_Job = form.Type_Of_Job.data
        phone = form.phone.data
        employee_count = form.employee_count.data
        address = form.address.data
        city = form.city.data
        state = form.state.data
        zip_code = form.zip_code.data
        country = form.country.data

        #cursor
        with connection.cursor() as cursor:
            # Create a new record
            sql = "INSERT INTO agencies_companies(company_name, email, password, Type_Of_Job, phone, employee_count, address, city, state, zip_code, country) VALUES(%s, \
                %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (company_name, email, password, Type_Of_Job, phone, employee_count, address, city, state, zip_code, country))

        #connection is not autocommit by default. So you must commit to save
        #your changes.
            connection.commit()

            cursor.close()


            flash('You are now regristered and can login', 'success')

        return redirect(url_for('login_agencies'))
    else:
        flash('REgristration Failed', 'error')


    return render_template('register_agencies.html', form=form)

@app.route('/login_agencies', methods=['GET', 'POST'])
def login_agencies():
    if request.method == 'POST':
        #Get form fields
        company_name = request.form['company_name']
        password_candidate = request.form['password']

        with connection.cursor() as cursor:
            # Create a new record
            sql = 'SELECT * FROM agencies_companies WHERE company_name = %s'
            result = cursor.execute(sql, (company_name))

            #connection is not autocommit by default. So you must commit to save
            #your changes.

            if result > 0:
                # Get stored hash

                data = cursor.fetchone()
                password = data['password']

                    #compare passwords

                if sha256_crypt.verify(password_candidate, password):
                    #Logged in, now create session for user 

                    session['logged_in'] = True
                    session['company_name'] = company_name

                    flash('You are now logged in', 'success')
                    return redirect(url_for('dashboard_agencies'))
                
                #close the session
                    connection.close() 
                
                else:
                    error = 'invalid login'
                    return render_template('login_agencies.html', error=error)

            else:
                error = 'Username not found'
                return render_template('login_agencies.html', error=error) 

    else:
        return render_template('login_agencies.html')
            

        cur_agency = mysql.connection.cursor()

        #get user my username
        result = cur_agency.execute('SELECT * FROM agencies_companies WHERE company_name = %s', [company_name] )

        #Cursor 

@app.route('/logout')
def logout():
    session.clear()
    flash('You are now logged out', 'success')
    return redirect(url_for('login'))


@app.route('/dashboard_users', methods=['GET', 'POST'])
@is_logged_in_user
def dashboard_users(): 

    #Web Browsers won't let you render images from local computer anymore - need to host images online somehow but keep file structure

    username = session['username']
    
    #Directory that has image

    with connection.cursor() as cursor:
            # Create a new record
        sql = "SELECT * FROM users WHERE username = %s"
        result = cursor.execute(sql, ([session['username']] ))

        user_info = cursor.fetchall()
        
        if result > 0:
                return render_template('dashboard_users.html',user_info=user_info)
        else:
                msg = 'No Data Found'
                return render_template('login.html', msg=msg)
            # Close connection 
                cursor.close()


@app.route('/dashboard_agencies', methods=['GET', 'POST'])
@is_logged_in_agency
def dashboard_agencies():

    # Get articles
    #result = cur.execute("SELECT * FROM articles")
    # Show articles only from the user logged in 
    with connection.cursor() as cursor:
            # Create a new record
        sql = "SELECT * FROM agencies_companies WHERE company_name = %s"
        result = cursor.execute(sql, ([session['company_name']]))

        company_info = cursor.fetchall()

        if result > 0:
            cursor.close()

            return render_template('dashboard_agencies.html',company_info=company_info)
        else:
            msg = 'No Data Found'
            cursor.close()

            return render_template('login.html', msg=msg)


#Make new route to change company name(username) email and password - does not happen here
@app.route('/dashboard_agencies_edit_info', methods=["GET", "POST"])
@is_logged_in_agency
def dashboard_agencies_edit_info():
    company_name = session['company_name']

    if  request.method == "POST":
                                        
        Type_of_Job = request.form.get('Type_of_Job')
        phone = request.form.get('phone')
        employee_count = request.form.get('employee_count')
        address = request.form.get('address')
        city = request.form.get('city')
        state = request.form.get('state')
        zip_code = request.form.get('zip_code')
        Country = request.form.get('Country')
        About_ME = request.form.get('About_ME')

        with connection.cursor() as cursor:
            # Create a new record
            sql = "UPDATE agencies_companies SET Type_of_Job=%s, phone=%s,employee_count=%s,address=%s,city=%s,state=%s,zip_code=%s,Country=%s,About_ME=%s where company_name =%s" 
            result = cursor.execute(sql, (Type_of_Job,phone,employee_count,address,city,state,zip_code,Country,About_ME,company_name))

            connection.commit()
            cursor.close
            flash('Info Updated', 'success')

            return redirect(url_for('dashboard_agencies'))

    #else:
    #    print('Validate on Submit Fucking Up')

    return render_template('dashboard_agencies_edit_info.html') 

class Job(Form):
    Job_Title = StringField('Job Title', [validators.Length(min = 1, max = 50)])
    Job_Location = StringField('Job Location', [validators.Length(min = 1, max = 25)])
    Job_Category = SelectField('Job Category', coerce = str, choices = [('0', 'Please Select...'), ('Fashion', 'Fashion'), ('Runway', 'Runway'), ('Commercial', 'Commercial'), ('Plus Size', 'Plus-Size'), ('Child', 'Child'), ('Swimsuit', 'Swimsuit'), ('Lingerie', 'Lingerie'), ('Glamour', 'Glamour'), ('Fitness', 'Fitness'), (10, 'Promotional'), ('Other', 'Other')], validators = [DataRequired()])
    Job_Length = StringField('Job_Length', [validators.Length(min = 1, max = 50)])
    Job_Experience = SelectField('Job Experience', coerce = str, choices = [('0', 'Please Select...'), ('No Experience', 'No Experience'), ('Amateur', 'Amateur'), ('Some Previous Experience', 'Some Previous Experience'), ('Advanced Experience', 'Advanced Experience'), ('Professional', 'Professional')] ,validators = [DataRequired()])
    Job_Salary  = SelectField('Job_Salary', coerce = str, choices = [('0', 'Please Select...'), ('< $1000', '< $1000'), ('$1001 - $2000', '$1001 - $2000'), ('$2001-$5000', '$2001-$5000'), ('$50001-$10,000', '$50001-$10,000'), ('$> 10,001', '$> 10,001')], validators = [DataRequired()])
    Job_City = TextAreaField('Job_City', default="Please Provide the City the Job will be completed in")
    Job_State = TextAreaField('Job_State', default="Please Provide the State the Job will be completed in")
    Job_Zip = TextAreaField('Zip', default="Please Provide the Zip the Job will be completed in")
    Tags = StringField('tags', [validators.Length(min = 1, max = 1000)])
    Job_Detail = TextAreaField("Job Details", default="Please provide a description of the job")
    submit = SubmitField()


@app.route('/post_job', methods=["GET", "POST"])
@is_logged_in_agency
def post_job():
    form = Job(request.form)
    company_name = session['company_name']       

    if request.method == 'POST':

        #Company name will be the username for agencies 
        Job_Title = form.Job_Title.data
        Job_Location = form.Job_Location.data
        Job_Category = form.Job_Category.data
        Job_Length = form.Job_Length.data
        Job_Experience = form.Job_Experience.data
        Job_Salary = form.Job_Salary.data
        Tags = form.Tags.data
        Job_Detail = form.Job_Detail.data
        Job_City = form.Job_City.data
        Job_State = form.Job_State.data
        Job_Zip = form.Job_Zip.data

        #cursor
        with connection.cursor() as cursor:
            # Create a new record
            sql = "INSERT INTO jobs_agencies(company_name, job_title, job_location, Job_Category, Job_Length, Job_Experience, Job_Salary, Tags, Job_Details, City, State, Zip) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (company_name, Job_Title, Job_Location, Job_Category, Job_Length, Job_Experience, Job_Salary, Tags, Job_Detail, Job_City, Job_State, Job_Zip))

            connection.commit()
            cursor.close()

            return render_template('jobs_post_photo.html')


    return render_template('post_job.html', form=form)

@app.route('/jobs_post_photo', methods=['POST', 'GET'])
@is_logged_in_agency
def jobs_post_photo():

    if request.method == 'POST':
        company_name = session['company_name']
        file = request.files['image']

        directory = app.config['UPLOAD_FOLDER'] + '\\' + company_name
        print(directory)

        if not os.path.exists(directory):
            os.makedirs(directory)
        filename = os.path.join(directory, company_name + '_' + file.filename )

        relative_filename = str(file.filename)
    
        file.save(filename)

        #Saving images as base64 then using datauri on dashboard_users to see the image. UNfortunantely this sucks for many reasons so may need 
        #TO Save Images to a disk in the future
        encoded_image = base64.b64encode(open(filename, "rb").read()).decode()

        data_url = 'data:image/jpeg;base64,{}'.format((encoded_image))
        #f = open(r'C:\Users\OWNER\Desktop\TestImage.txt', 'w')
        #f.write(data_url)
        #f.close()   
        with connection.cursor() as cur_1:
            # Create a new record
            sql = "SELECT max(Idjobs) From jobs_agencies Where company_name = %s"
            cur_1.execute(sql, (company_name,))

        #        data_url = 'data:image/png;base64,{}'.format(quote(data))

        #app.logger.info(company_name)
        # Execute
        
            id_value = cur_1.fetchone()
            jobid = id_value['max(Idjobs)']
            jobid = int(jobid)

            sql2 = "UPDATE jobs_agencies SET Photo_Path=%s WHERE idJobs = %s"
            cur_1.execute(sql, (data_url, jobid))

            connection.commit()        #close conenction
            cur_1.close()
       
            return render_template('jobs_landing_page.html')
    return render_template('jobs_post_photo.html')

@app.route('/jobs_landing_page', methods=["GET", "POST"])
def jobs_landing_page():

    data = ['Fashion','Runway', 'Commercial', 'Plus-Size', 'Child', 'Swimsuit', 'Lingerie', 'Glamour', 'Fitness', 'Promotional','Other']
    
    category = request.args.get('category')

    with connection.cursor() as cursor:
        page = request.args.get(get_page_parameter(), type=int, default=1)
        per_page = 5
        offset = (page - 1) * per_page

        sql2 = 'SELECT * FROM jobs_agencies'
        result2 = cursor.execute(sql2)

        total_count_users = len(cursor.fetchall())

        
            # Create a new record
        sql = 'SELECT * FROM jobs_agencies ORDER BY IdJobs DESC LIMIT %s OFFSET %s'
        
        result = cursor.execute(sql, (per_page, offset))
        print(total_count_users)


        if category not in data:

            if result > 0:
                    # Get stored hash

                rows = cursor.fetchall()
       
                #close the session
                cursor.close()
                search = False
                q = request.args.get('q')
                if q:
                    search = True
                print(len(rows))        
                pagination = Pagination(page=page, total=total_count_users, search=search, per_page=per_page, offset=offset, css_framework = 'bootstrap3',
                record_name='rows')

            else:
                print("no records found")

            return render_template('jobs_landing_page.html',                            
                                    jobs=rows, data=data, pagination=pagination)
        else:
            sql = 'SELECT * FROM jobs_agencies WHERE Job_Category = %s'
            result = cursor.execute(sql,([category]))

            if result > 0:
                    # Get stored hash

                rows = cursor.fetchall()
                #print(rows[0])
                
                #close the session
                cursor.close()
                search = False
                q = request.args.get('q')
                if q:
                    search = True
                page = request.args.get(get_page_parameter(), type=int, default=1)
                pagination = Pagination(page=page, total=len(rows), search=search, per_page=5,
                record_name='rows')
            
            else:
                print("no records found")

            return render_template('jobs_landing_page.html', jobs=rows, data=data, pagination=pagination)

    return render_template('jobs_landing_page.html') 

### If the person does not have an account, flash a message telling them to make an account 
@app.route('/View_Specific_Job<int:jobid>', methods=["GET", "POST"])
def View_Specific_Job(jobid):

    str_jobid = str(jobid)


    class Config():
        training_dir = r"C:\Users\OWNER\Desktop\git\Faces\Facial-Similarity-with-Siamese-Networks-in-Pytorch\data\faces\training"
        testing_dir = "C:\\Users\\OWNER\Desktop\\Image Comparison\\{}".format(str_jobid)


    username = session['username']
    if request.method == 'POST':

        with connection.cursor() as cursor:
                # Create a new record
            sql = "SELECT * FROM users WHERE username = %s" 
            result = cursor.execute(sql, ([username]))

            user_result = cursor.fetchall()
            user_result = user_result[0]
            name = user_result.get('name')
            email = user_result.get('email')
            username = user_result.get('username')
            height = user_result.get('height')
            weight = user_result.get('weight')
            ethnicity = user_result.get('ethnicity')
            photo1 = user_result.get('Photo1')
            photo2 = user_result.get('Photo2')
            photo3 = user_result.get('Photo3')
            resume = user_result.get('Resume')
            about_me = user_result.get('About_Me')
            gender = user_result.get('gender')
            age = user_result.get('Age')
            userID = user_result.get('idUsers')

            sql2 = "SELECT * from Jobs_Agencies where IdJobs = %s"
            result2 = cursor.execute(sql2, [jobid])
            company_info = cursor.fetchall()   
            company_info = company_info[0]

            company_name = company_info.get('company_name')
            job_id_FK = company_info.get('IdJobs')

        #cursor
        #close conenction

            #User PhotoImage
            im = Image.open(io.BytesIO(base64.b64decode(photo1.split(',')[1])))
            save_user_photo = r"C:\Users\OWNER\Desktop\Image Comparison"
            
            directory = save_user_photo + '\\' + str_jobid + '\\'+ username

            if not os.path.exists(directory):
                os.makedirs(directory)
            filename = os.path.join(directory, username + '_' + "Comparison" + '_' + str_jobid + '.jpeg')
            im.save(filename)

            #company Phoyo

            Comparison_Photo = company_info.get('Photo_path')
            im2 = Image.open(io.BytesIO(base64.b64decode(Comparison_Photo.split(',')[1])))
            
            directory = save_user_photo + '\\' + str_jobid + '\\' + company_name

            if not os.path.exists(directory):
                os.makedirs(directory)
            filename = os.path.join(directory, company_name + '_' + "Comparison" + '_' + str_jobid + '.jpeg')

            if not os.path.exists(filename):
                im2.save(filename)
            
            #Need to make sure company_info is always the folder being chosen while the first one is the user folder made above
            folder_dataset_test = dset.ImageFolder(root=Config.testing_dir)
            siamese_dataset = SiameseNetworkDataset(imageFolderDataset=folder_dataset_test,
                                                transform=transforms.Compose([transforms.Resize((100,100)),
                                                                            transforms.ToTensor()
                                                                            ])
                                            ,should_invert=False)
            
            print(Config.testing_dir)


            test_dataloader = DataLoader(siamese_dataset,num_workers=0,batch_size=1,shuffle=False)               
            dataiter = iter(test_dataloader)
            x0,_,_ = next(dataiter)


            _,x1,label2 = next(dataiter)
            concatenated = torch.cat((x0,x1),0)
            
            output1,output2 = net2(Variable(x0),Variable(x1))
            euclidean_distance = F.pairwise_distance(output1, output2)

            score = euclidean_distance.item()
            score = float(score)
            print(type(score))
            print(score)

            sql3 = "INSERT INTO job_applications(name, email, username, height, weight, ethnicity, Photo1, Photo2, Photo3, Resume, About_Me, gender, Age, userID, company_name, jobid_fk, score) VALUES(%s, \
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql3, (name, email, username, height, weight, ethnicity, photo1, photo2, photo3, resume, about_me, gender, age, userID, company_name, job_id_FK,score))

            connection.commit()
            cursor.close()

            return redirect(url_for('jobs_landing_page'))
    
    if request.method == 'GET':

        with connection.cursor() as cursor:
                # Create a new record
            sql = 'SELECT * FROM jobs_agencies WHERE IdJobs = %s'
            result = cursor.execute(sql, ([jobid]))

        if result > 0:
                # Get stored hash

            rows = cursor.fetchall()
            print(rows[0])
            
            cursor.close()

            return render_template('/View_Specific_Job.html', rows=rows)
        
        else:
            print("no records found")
        
    return render_template('View_Specific_Job.html')

@app.route('/view_job_applications', methods=["GET", "POST"])
@is_logged_in_agency
def view_job_applications():
    company_name = session['company_name']

    if request.method == 'GET':
        with connection.cursor() as cursor:
                # Create a new record
            sql = 'SELECT * FROM job_applications WHERE company_name = %s'
            result = cursor.execute(sql, ([company_name]))

        print("specific jobs")

        if result > 0:
                # Get stored hash

            rows = cursor.fetchall()
            #print(rows[0])
            
            #close the session
            cursor.close()

        else:
            print("no records found")

        return render_template('view_job_applications.html', jobs=rows)

    return render_template('view_job_applications.html') 

#Will Display running Neural Network on all users in a specific zip code/city and creating your own photo to use
@app.route('/features', methods=["GET", "POST"])
@is_logged_in_agency
def features():
    
    return render_template('features.html') 

#From to select City or Zip to Run against the database 
class Run_Model(Form):
    City = StringField('City', [validators.Length(min = 1, max = 50)])
    Zip = IntegerField('Zip', [validators.Length(min = 1, max = 25)])
    submit = SubmitField()

#ALlows Agencies to run the neural network across cities/zip codes 
@app.route('/masscheck', methods=["GET", "POST"])
@is_logged_in_agency
def masscheck():

    form = Run_Model(request.form)
    company_name = session['company_name']


    if request.method == 'GET':    
        with connection.cursor() as cursor:
                # Create a new record
            sql = 'SELECT * FROM job_applications WHERE company_name = %s'
            result = cursor.execute(sql, ([company_name]))

        if result > 0:
                # Get stored hash

            rows = cursor.fetchall()
            
            #close the session
            cursor.close()
            return render_template('masscheck.html', jobs=rows)

        else:
            flash("no records found, please post a job first before using this tool", 'danger')

            return render_template('masscheck.html')
    
    return render_template('masscheck.html') 


@app.route('/masscheck_runNN<int:jobid>', methods=["POST"])
@is_logged_in_agency
def masscheck_runNN(jobid):

    jobid = str(jobid)
    print(jobid)

    if request.method == 'POST':
        print("request started")


        if request.form['City'] == '' and request.form['Zip'] == '':
            print("1")

            flash('Please insert at least city or state to run the search on', 'danger')
            return render_template('masscheck.html')

        elif (request.form['City'] != '') and (request.form['Zip'] != ''):
            print("2")
            flash('Please select only least city or state to run the search on', 'danger')
            return render_template('masscheck.html')
        
        elif request.form['City'] == '' and request.form['Zip'] != '':
            print("3")
            Zip = request.form['Zip']
            print(Zip)
            with connection.cursor() as cursor:
                # Create a new record
                sql = "SELECT * from USERS where Zip = %s"
                result1 = cursor.execute(sql, ([Zip]))
                company_info = cursor.fetchall()   


                sql2 = "SELECT * from Jobs_Agencies where IdJobs =%s"
                result2 = cursor.execute(sql2, ([jobid]))
                company_info2 = cursor.fetchall()   


                cursor.close()

            #Calls the celery worker to run the neural network against the city or zipcode in question 
            Celery_Send_Data_NN.apply_async(kwargs={'company_info':company_info,'company_info2':company_info2}) 
            
            return render_template('masscheck.html')


            #Run_FacialSimilarity_Zip_City(company_info,company_info2)

        elif request.form['City'] != '' and request.form['Zip'] == '':
            print("4")
            City = request.form['City']

            with connection.cursor() as cursor:
                # Create a new record
                sql = "SELECT * from USERS where city = %s"
                result1 = cursor.execute(sql, ([City]))
                company_info = cursor.fetchall()   

                sql2 = "SELECT * from Jobs_Agencies where IdJobs =%s"
                result2 = cursor.execute(sql2, ([jobid]))
                company_info2 = cursor.fetchall()   

                cursor.close()

            #Calls the celery worker to run the neural network against the city or zipcode in question 

            Celery_Send_Data_NN.apply_async(kwargs={'company_info':company_info,'company_info2':company_info2}) 
            return render_template('masscheck.html')
            #Run_FacialSimilarity_Zip_City(company_info,company_info2)

        else:
            print("5")
            flash('Weird Error', 'danger')
            return render_template('masscheck.html')
    return render_template('masscheck.html')

# cd C:\Users\OWNER\Desktop\git\Modelytics Repo\Website Modelytics
# celery -A MainPageFlask.celery worker -c 2 -E -P solo -l DEBUG --without-gossip --without-mingle --without-heartbeat -Ofair
# celery flower -A MainPageFlask.celery worker --address=127.0.0.1 --port=5555
# python -m MainPageFlask
# celery -A MainPageFlask.celery status ##view status of worker


#Possible Security Concern Exposing Password. 
@celery.task(name='Celery_Send_Data_NN')
def Celery_Send_Data_NN(company_info, company_info2):
    Run_NN_MassCheck(company_info, company_info2)

#Need to reconnect to mysql here since this function is not linked to flask by a route
def Run_NN_MassCheck(company_info, company_info2):

    for user_info in company_info:

        user_result = user_info 
        name = user_result.get('name')
        email = user_result.get('email')
        username = user_result.get('username')
        height = user_result.get('height')
        weight = user_result.get('weight')
        ethnicity = user_result.get('ethnicity')
        photo1 = user_result.get('Photo1')
        photo2 = user_result.get('Photo2')
        photo3 = user_result.get('Photo3')
        resume = user_result.get('Resume')
        about_me = user_result.get('About_Me')
        gender = user_result.get('gender')
        age = user_result.get('Age')
        userID = user_result.get('idUsers')
        City = user_result.get('city')
        State = user_result.get('State')
        Zip = user_result.get('Zip')

        company_name = company_info2[0].get('company_name')
        job_id_FK = company_info2[0].get('IdJobs')

        str_jobid = str(job_id_FK)

        class Config():
            training_dir = r"C:\Users\OWNER\Desktop\git\Faces\Facial-Similarity-with-Siamese-Networks-in-Pytorch\data\faces\training"
            testing_dir = "C:\\Users\\OWNER\Desktop\\Image Comparison\\{}".format(str_jobid)

    #cursor
    #close conenction

        #User PhotoImage
        im = Image.open(io.BytesIO(base64.b64decode(photo1.split(',')[1])))
        save_user_photo = r"C:\Users\OWNER\Desktop\Image Comparison"
        
        directory = save_user_photo + '\\' + str_jobid + '\\'+ username

        if not os.path.exists(directory):
            os.makedirs(directory)
        filename = os.path.join(directory, username + '_' + "Comparison" + '_' + str_jobid + '.jpeg')
        im.save(filename)

        #company Phoyo

        Comparison_Photo = company_info2[0].get('Photo_path')
        im2 = Image.open(io.BytesIO(base64.b64decode(Comparison_Photo.split(',')[1])))
        
        directory = save_user_photo + '\\' + str_jobid + '\\' + company_name

        if not os.path.exists(directory):
            os.makedirs(directory)
        filename = os.path.join(directory, company_name + '_' + "Comparison" + '_' + str_jobid + '.jpeg')

        if not os.path.exists(filename):
            im2.save(filename)
        
        #Need to make sure company_info is always the folder being chosen while the first one is the user folder made above
        folder_dataset_test = dset.ImageFolder(root=Config.testing_dir)
        siamese_dataset = SiameseNetworkDataset(imageFolderDataset=folder_dataset_test,
                                            transform=transforms.Compose([transforms.Resize((100,100)),
                                                                        transforms.ToTensor()
                                                                        ])
                                        ,should_invert=False)
        
        print(Config.testing_dir)


        test_dataloader = DataLoader(siamese_dataset,num_workers=0,batch_size=1,shuffle=False)               
        dataiter = iter(test_dataloader)
        x0,_,_ = next(dataiter)


        _,x1,label2 = next(dataiter)
        concatenated = torch.cat((x0,x1),0)
        
        output1,output2 = net2(Variable(x0),Variable(x1))
        euclidean_distance = F.pairwise_distance(output1, output2)

        score = euclidean_distance.item()
        score = float(score)
        print(type(score))
        print(score)
        if score < 10:
            
            with connection.cursor() as cursor:
                    # Create a new record
                sql = "INSERT INTO job_applications (name, email, username, height, weight, ethnicity, Photo1, Photo2, Photo3, Resume, About_Me, gender, Age, userID, company_name, jobid_fk, score) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, (name, email, username, height, weight, ethnicity, photo1, photo2, photo3, resume, about_me, gender, age, userID, company_name, job_id_FK,score))

                #connection is not autocommit by default. So you must commit to save
                #your changes.
                connection.commit()

                cursor.close()

@app.route('/user_run_all_jobs', methods=["GET", "POST"])
@is_logged_in_user
def user_run_all_jobs():

    form = Run_Model(request.form)


    username = session['username']
    if request.method == 'POST':
        print("request started")


        if request.form['City'] == '' and request.form['Zip'] == '':
            print("1")

            flash('Please insert at least city or state to run the search on', 'danger')
            return render_template('user_run_all_jobs.html')

        elif (request.form['City'] != '') and (request.form['Zip'] != ''):
            print("2")
            flash('Please select only least city or state to run the search on', 'danger')
            return render_template('user_run_all_jobs.html')
        
        elif request.form['City'] == '' and request.form['Zip'] != '':
            print("3")
            Zip = request.form['Zip']
            print(Zip)
            with connection.cursor() as cursor:
                # Create a new record
                sql = "SELECT * from USERS where username = %s"
                result1 = cursor.execute(sql, (username))
                user_info = cursor.fetchall()   

                sql2 = "SELECT * from Jobs_Agencies where Zip =%s"
                result2 = cursor.execute(sql2, (Zip))
                company_info = cursor.fetchall()   

                print(user_info.keys())
                print(company_info.keys())


                cursor.close()

            #Calls the celery worker to run the neural network against the city or zipcode in question 
            Celery_User_All_Jobs.apply_async(kwargs={'User_info':user_info,'company_info':company_info}) 
            
            return render_template('dashboard_users.html', user_info=user_info)


            #Run_FacialSimilarity_Zip_City(company_info,company_info2)

        elif request.form['City'] != '' and request.form['Zip'] == '':
            print("4")
            City = request.form['City']

            with connection.cursor() as cursor:
                # Create a new record
                sql = "SELECT * from USERS where username = %s"
                result1 = cursor.execute(sql, (username))
                user_info = cursor.fetchall()   

                sql2 = "SELECT * from Jobs_Agencies where job_location =%s"
                result2 = cursor.execute(sql2, (City))
                company_info = cursor.fetchall()   

                cursor.close()

                print(user_info)
                print(company_info)
            #Calls the celery worker to run the neural network against the city or zipcode in question 

            Celery_User_All_Jobs.apply_async(kwargs={'User_Info':user_info,'company_info':company_info}) 

            #Run_Celery_User_All_Jobs(user_info, company_info)
            return redirect(url_for('dashboard_users', user_info = user_info))


            #Run_FacialSimilarity_Zip_City(company_info,company_info2)


        else:
            print("5")
            flash('Weird Error', 'danger')
            return render_template('user_run_all_jobs.html')
    return render_template('user_run_all_jobs.html')

@celery.task(name='Celery_User_All_Jobs')
def Celery_User_All_Jobs(User_Info, company_info):
    Run_Celery_User_All_Jobs(User_Info, company_info)

def Run_Celery_User_All_Jobs(User_Info, company_info):
    User_Info = User_Info[0]
    print(User_Info)

    for company_info in company_info:

        # print(User_Info)
        
        idJobs = company_info.get('IdJobs')
        company_name = company_info.get('company_name') 
        job_title = company_info.get('job_title')
        job_location = company_info.get('job_location')
        job_category = company_info.get('job_category')
        job_length = company_info.get('job_length')
        job_experience = company_info.get('job_experience')
        job_salary = company_info.get('job_salary')
        Tags = company_info.get('Tags')
        Job_Details  = company_info.get('Job_Details')
        Photo_path = company_info.get('Photo_path')
        create_Date = company_info.get('create_Date')
        City = company_info.get('city')
        State = company_info.get('State')
        Zip = company_info.get('Zip')

        username = User_Info.get('username')
        userid = User_Info.get('idUsers')

        idJobs = str(idJobs)

        class Config():
            training_dir = r"C:\Users\OWNER\Desktop\git\Faces\Facial-Similarity-with-Siamese-Networks-in-Pytorch\data\faces\training"
            testing_dir = "C:\\Users\\OWNER\Desktop\\Image Comparison\\{}".format(idJobs)

    #cursor
    #close conenction
            #User PhotoImage

        im = Image.open(io.BytesIO(base64.b64decode(Photo_path.split(',')[1])))

        save_user_photo = r"C:\Users\OWNER\Desktop\Image Comparison"
        
        directory = save_user_photo + '\\' + idJobs + '\\'+ company_name

        if not os.path.exists(directory):
            os.makedirs(directory)
        filename = os.path.join(directory, company_name + '_' + "Comparison" + '_' + idJobs + '.jpeg')
        im.save(filename)

        #company Phoyo

        Comparison_Photo = User_Info.get('Photo1')
        im2 = Image.open(io.BytesIO(base64.b64decode(Comparison_Photo.split(',')[1])))

        directory = save_user_photo + '\\' + str(userid) + '\\' + username

        if not os.path.exists(directory):
            os.makedirs(directory)
        filename = os.path.join(directory, username + '_' + "Comparison" + '_' + str(userid) + '.jpeg')

        if not os.path.exists(filename):
            im2.save(filename)
        
        #Need to make sure company_info is always the folder being chosen while the first one is the user folder made above
        folder_dataset_test = dset.ImageFolder(root=Config.testing_dir)
        siamese_dataset = SiameseNetworkDataset(imageFolderDataset=folder_dataset_test,
                                            transform=transforms.Compose([transforms.Resize((100,100)),
                                                                        transforms.ToTensor()
                                                                        ])
                                        ,should_invert=False)
        
        print(Config.testing_dir)


        test_dataloader = DataLoader(siamese_dataset,num_workers=0,batch_size=1,shuffle=False)               
        dataiter = iter(test_dataloader)
        x0,_,_ = next(dataiter)


        _,x1,label2 = next(dataiter)
        concatenated = torch.cat((x0,x1),0)
        
        output1,output2 = net2(Variable(x0),Variable(x1))
        euclidean_distance = F.pairwise_distance(output1, output2)

        score = euclidean_distance.item()
        score = float(score)
        print(type(score))
        print("Score for users")
        print(score)
        if score < 1000:
            
            with connection.cursor() as cursor:
                    # Create a new record
                sql = "INSERT INTO job_applications (name, email, username, height, weight, ethnicity, Photo1, Photo2, Photo3, Resume, About_Me, gender, Age, userID, company_name, jobid_fk, score) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, (User_Info.get('name'), User_Info.get('email'), User_Info.get('username'), User_Info.get('height'), User_Info.get('weight'), User_Info.get('ethnicity'), User_Info.get('photo1'), User_Info.get('photo2'), User_Info.get('photo3'), User_Info.get('resume'), User_Info.get('about_me'), User_Info.get('gender'), User_Info.get('age'), User_Info.get('userID'), User_Info.get('company_name'), idJobs,score))

                #connection is not autocommit by default. So you must commit to save
                #your changes.
                connection.commit()

                cursor.close()


@app.route('/purchase', methods=['GET', 'POST'])
def purchase():
    return render_template('purchase.html')


@app.route('/product<int:product_id>', methods=['GET', 'POST'])
def product(product_id):
    product = get_product(product_id)
    if product:
        product['amount_in_dollars'] = product['amount'] / 100
        return render_template(
            'stripeindex.html',
            key=app.config['STRIPE_PUBLIC_KEY'],
            product=product
        )
    return abort(404)

@app.route('/charge', methods=['POST'])
def charge():
    try:
        username = session['username']
    except:
        username = 'Test'
    response = jsonify('error')
    response.status_code = 500
    product = get_product(int(request.json['product']))

    with connection.cursor() as cursor:
        sql = "SELECT * FROM USERS WHERE USERNAME = %s"
        cursor.execute(sql, (username))

        user_info = cursor.fetchall()
        cursor.close()

    user_info = user_info[0]
    email = user_info.get('email')

    if product:
        
        try:
            product = get_product(int(request.json['product']))
            customer = stripe.Customer.create(
                email=email,
                source=request.json['token']
            )
            plan = stripe.Plan.create(
            nickname=product['name'],
            product=product['plan_id'],
            amount=product['amount'],
            currency="usd",
            interval="month",
            usage_type="licensed",
            )
            subscription = stripe.Subscription.create(
            customer=customer.id,
            items=[
                    {
                    "plan": plan.id,
                    "quantity": 1,
                    },
                ]
            )

            charge = stripe.Charge.create(
                customer=customer.id,
                amount=product['amount'],
                currency='usd',
                description=product['description']
            )
            response = jsonify('success')
            print('status code')
            print(response.status_code)

            if response.status_code == 200:
                with connection.cursor() as cursor:
                    sql = "INSERT INTO stripedata (username, stripe_cusotmerid, stripe_email, stripe_token, plan_nickname, product_name, product_id, \
                    product_amount, product_currency, payment_interval, usage_type, subscription, subscription_id, product_description, \
                    status_code, error) VALUES (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s, %s)"

                    cursor.execute(sql, (username, customer.id, customer.email, request.json['token'], plan.nickname, plan.product, product['id'], plan.amount,
                    plan.currency, plan.interval, plan.usage_type, 1, subscription.id, charge.description, response.status_code, None))

                    connection.commit()
                    cursor.close()

            response.status_code = 202

        except stripe.error.StripeError as e:
            with connection.cursor() as cursor:
                sql = "INSERT INTO stripedata (username, stripe_cusotmerid, stripe_email, stripe_token, plan_nickname, product_name, product_id, \
                    product_amount, product_currency, payment_interval, usage_type, subscription, subscription_id, product_description, \
                    status_code, error) VALUES (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s, %s)"

                cursor.execute(sql, (username, customer.id, customer.email,request.json['token'], plan.nickname, plan.product, product['id'], plan.amount,
                    plan.currency, plan.interval, plan.usage_type, 1, subscription.id, charge.description, response.status_code, e))

                connection.commit()
                cursor.close()
    return response

@app.route('/unsubscribe', methods=['GET', 'POST'])
def unsubscribe():
    return render_template('unsubscribe.html')

@app.route('/unsubscribe_product<int:product_id>', methods=['GET', 'POST'])
def unsubscribe_product(product_id):
    try:
        username = session['username']
    except Exception as e:
        username = 'Test'
    
    print(username)
    print(product_id)

    product = get_product(product_id)
    if product:
        with connection.cursor() as cursor:
            sql = 'SELECT * FROM stripedata where username = %s and product_id = %s and subscription = 1 ORDER by idStripeData desc LIMIT 1'

            result = cursor.execute(sql, (username, product_id)) 

            if result > 0:

                rows = cursor.fetchall()
                rows = rows[0]
                print('rows')
                print(rows)

                username = rows.get('username')
                stripe_customerid = rows.get('stripe_cusotmerid')
                print(stripe_customerid)
                stripe_email = rows.get('stripe_email')
                stripe_token = rows.get('stripe_token')
                plan_nickname = rows.get('stripe_nickname')
                product_name = rows.get('product_name')
                product_id = product_id
                product_amount = rows.get('product_amount')
                product_currency = rows.get('product_currency')
                product_interval = rows.get('product_interval')
                usage_type = rows.get('usage_type')
                subscription = '0'
                subscription_id = rows.get('subscription_id')
                product_description = rows.get('product_description')
                error = rows.get('error')

                stripe.Subscription.modify(
                subscription_id,
                cancel_at_period_end=True
                )

                response = jsonify('success')
                print('status code')
                print(response.status_code)
                status_code = response.status_code

                sql = "INSERT INTO stripedata (username, stripe_cusotmerid, stripe_email, stripe_token, plan_nickname, product_name, product_id, \
                    product_amount, product_currency, payment_interval, usage_type, subscription, subscription_id, product_description, \
                    status_code, error) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s, %s)"
                
                cursor.execute(sql, (username, stripe_customerid, stripe_email, stripe_token, plan_nickname, product_name, product_id, product_amount,
                product_currency, product_interval, usage_type, subscription, subscription_id, product_description, status_code, error))

                connection.commit() 

                return render_template('unsubscribetext.html')

    return render_template('unsubscribe_product.html')

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.secret_key='secret123'
#Turn on debugging mode, don't need to restart server each time
    app.run(host="localhost", port=8000, debug = True)

    # application = current_app._get_current_object()
#     worker = w norker.worker(app=application)

#     options = {
#     'broker': app.config['CELERY_BROKER_URL'],
#     'loglevel': 'INFO',
#     'traceback': True,
#     }

# worker.run(**options)


			