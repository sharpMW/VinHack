from flask import Flask, render_template, request,jsonify
import requests as rq
from bs4 import BeautifulSoup
from io import BytesIO
import os
import tensorflow as tf
import tensorflow_hub as hub
import pyrebase
from flask_cors import CORS
from PIL import Image
import numpy as np
from scipy.spatial import distance
import firebase

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS']='application/json'
firebaseConfig = {
  "apiKey": "AIzaSyCITvsI5xCJAf0BUIi_EWwkZ2MANYZHtME",
  "authDomain": "visteria-3f59f.firebaseapp.com",
  "databaseURL": "https://visteria-3f59f-default-rtdb.firebaseio.com",
 "projectId": "visteria-3f59f",
  "storageBucket": "visteria-3f59f.appspot.com",
  "messagingSenderId": "274079183507",
  "appId": "1:274079183507:web:79f2ba959fbd2b4ecd5366"
}
firebase = pyrebase.initialize_app(firebaseConfig)
storage = firebase.storage()
# @app.route("/")
# def form():
#     return render_template("index.html")


@app.route("/test", methods=["POST"])    
def test():
    if request.method =="POST":
        print("hi")
        return "HI"

@app.route("/", methods=["POST"])  # , 'GET'
def upload():
    if request.method == "POST":
        print("Swayam")
        #Web-Scraping Function

        def web_scrap(main_page,source):
            r2 = rq.get(main_page)
            soup = BeautifulSoup(r2.text,"html.parser")
            links=[]
            images = soup.select(source)
            for img in images:
                links.append(img['src'])
            #os.mkdir(database_name)    
            i=1
            l=[]
            for index,img_link in enumerate(links):
                if i<=10:
                    # img_data = rq.get(img_link).content
                    l.append(img_link)
                    # with open("web_photos//"+str(index+1)+'.jpg', 'wb+') as f:
                    #     # f.write(img_data)
                    # storage.child("trends/"+str(i)+".jpg").put(img_data)
                    i+=1
                # else
                #     f.close()
                #     break
            return l
            

        trend = web_scrap("https://www.vogue.in/",'img[src^="https://assets.vogue.in/photos/"]' )
        wardrobe_pant=[]
        wardrobe_shirt=[]
        wardrobe_shoes=[]
        for i in range(1,5):
            wardrobe_pant.append(storage.child("Wardrobe/pant/pant-"+str(i)+".jpeg").get_url(None))
        for i in range(1,5):
            wardrobe_shirt.append(storage.child("Wardrobe/shirt/shirt-"+str(i)+".jpeg").get_url(None))
        for i in range(1,5):
            wardrobe_shoes.append(storage.child("Wardrobe/shoe/shoe-"+str(i)+".jpeg").get_url(None))
        #ML Model

        model_url = "https://tfhub.dev/tensorflow/efficientnet/lite0/feature-vector/2"
        IMAGE_SHAPE = (224, 224)
        layer = hub.KerasLayer(model_url)
        model = tf.keras.Sequential([layer])

        #Image Data Extraction Function

        def extract(file):
            file = Image.open(file).convert('L').resize(IMAGE_SHAPE)
            file = np.stack((file,)*3, axis=-1)
            file = np.array(file)/255.0
            embedding = model.predict(file[np.newaxis, ...])
            vgg16_feature_np = np.array(embedding)
            flattended_feature = vgg16_feature_np.flatten()
            return flattended_feature

        #Correlation Measure Function

        metric = 'cosine'

        def distance_corr(a,b):
            dc = distance.cdist([a], [b], metric)[0]
            return float(dc)

        # #Creating a Function to 
        # # trend=[]
        # # wardrobe=[]
        # print(storage.child("trends/1.jpg").get_url(None))
        # # for x in storage:
        # #     # storage.child(str(x)+".jpg").download("trendsLocal/"+str(x)+".jpg")
        # # print("trends: ")


        # os.mkdir("web_photos")
        def comaparision(trend,wardrobe):
            d=[]
            for i1 in trend:
                for j in wardrobe:
                    l=[i1,j]
                    
                    i=1
                    for index,img_link in enumerate(l):
                        if i<=10:
                            img_data = rq.get(img_link).content
                            with open("web_photos//"+str(index+1)+'.jpg', 'wb+') as f:
                                f.write(img_data)
                            i+=1
                        else:
                            f.close()
                            break
            a = extract(r'.\web_photos\1.jpg')
            b = extract(r'.\web_photos\2.jpg')
            d.append(distance_corr(a,b))
            d.append(j) 
            d.append(i1)
            return d
        l_shirt=[]
        l_pant=[]
        l_shoes=[]
        for p in range(0,2):
            for q in wardrobe_pant:
                t=[(trend[p])]
                o=[q]
                l_pant.append(comaparision(t,o))
        for p in range(0,2):
            for q in wardrobe_shirt:
                t=[(trend[p])]
                o=[q]
                l_shirt.append(comaparision(t,o))
        for p in range(0,2):
            for q in wardrobe_shoes:
                t=[(trend[p])]
                o=[q]
                l_shoes.append(comaparision(t,o))
        l_shoes.sort()
        l_pant.sort()
        l_shirt.sort()
        print(l_shoes)
        print(l_shirt)
        print(l_pant)
        k=[]
        shirt2=[]
        pant2=[]
        shoes2=[]
        shirt2.append([l_shirt[0][1],l_shirt[0][2]])
        shirt2.append([l_shirt[1][1],l_shirt[1][2]])
        shirt2.append([l_shirt[2][1],l_shirt[2][2]])
        shirt2.append([l_shirt[3][1],l_shirt[3][2]])
        pant2.append([l_pant[0][1],l_pant[0][2]])
        pant2.append([l_pant[1][1],l_pant[1][2]])
        pant2.append([l_pant[2][1],l_pant[2][2]])
        pant2.append([l_pant[3][1],l_pant[3][2]])
        shoes2.append([l_shoes[0][1],l_shoes[0][2]])
        shoes2.append([l_shoes[1][1],l_shoes[1][2]])
        shoes2.append([l_shoes[2][1],l_shoes[2][2]])
        shoes2.append([l_shoes[3][1],l_shoes[3][2]])
        k.append(shirt2)
        k.append(pant2)
        k.append(shoes2)

        # l_shirt1=(l_shirt[0][1])
        # l_pant1=(l_pant[0][1])
        # l_shoe1=(l_shoes[0][1])
        return jsonify(k)



# call main
if __name__ == "__main__":
    app.run(debug=True)







