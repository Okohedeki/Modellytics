import shutil
from glob import glob
import os
import time

initial_path_no_images = r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\App'
initial_path_images = r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ\assets'

directory_to_iterate = r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile'

for index, filename in enumerate(filter(os.path.isdir, os.listdir(directory_to_iterate))):
    if index not in (0, 1, 35, 36):
        print(str(index), filename)
        full_path = os.path.join(directory_to_iterate, filename)
        for subfilename in os.listdir(full_path):
            if subfilename == 'assets':
                next_path = os.path.join(full_path, subfilename)
                for js_files in os.listdir(next_path):
                    if js_files == 'images':
                        final_js_files = os.path.join(next_path, js_files)
                        for images_to_move in os.listdir(final_js_files):
                            really_final_image_to_love = os.path.join(final_js_files, images_to_move)
                            shutil.copy(really_final_image_to_love,initial_path_images)
                            #print(really_final_image_to_love)
                    # js_file_path = os.path.join(next_path, js_files)
                    # if js_file_path != r'C:\Users\Edeki Okoh1\Desktop\Modellytics\Mobile\EyeQ_43\App\.DS_Store':
                    #     shutil.move(js_file_path,initial_path_no_images)
