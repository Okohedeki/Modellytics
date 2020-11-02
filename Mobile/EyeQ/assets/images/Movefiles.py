import shutil
import glob
import os

initial_path_no_images = r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\App'
initial_path_images = r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\assets'

print('a')

directory_to_iterate = r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ'

for filename in os.listdir(directory_to_iterate):
    print(filename)
