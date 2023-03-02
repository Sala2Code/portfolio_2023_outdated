# This script write a new JSON file to update the current projects.json
# It's usefullness for users but the code can be interesting to read

# * Web Scrapping
from bs4 import BeautifulSoup as bs
import requests
from googletrans import Translator
import json

listProj = []
translator = Translator()

lProject = ["portfolio", "Labyrinthe-2d-and-3d", "MyRecipes", "boids", "RetroRoad", "IA_Car_Racing", "Soft-Body", "Raycasting"]
for i,title in enumerate(lProject):
    if title != "Sala2Code":
        urlProject="https://github.com/Sala2Code/"+title

        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(urlProject, headers=headers)
        soup = bs(response.content, "html.parser")

        descEN = soup.find("article", class_="entry-content").p.text
        descFR = translator.translate(descEN, dest="fr").text

        lang = [i.text for i in soup.find_all('span', class_='mr-1')[1:] if i.text!="Other" ]


        # * This require a quality network, moreover, it's a data fixed so, it's necessary to do it only once
        # date = soup.find("relative-time", class_="no-wrap").text

        # Opening JSON file
        f = open('./ExternalScripts/immutableData.json','r')
        ImmutableData = json.load(f)
        date = ImmutableData['data'][i]['date']
        typeProject = ImmutableData['data'][i]['type']
        extension = ImmutableData['data'][i]['extension'] # gif or png

        project = {
            "name": title,
            "desc" : [descEN, descFR],
            "lang" : lang, # Language name (C++, Python...)
            "img" : title+"."+extension, # Name of img/video
            "date" : date, 
            "type" : typeProject, # Personal / School / Work
        }
        listProj.append(project)
        i+=1 # The GitHub profile prevents to use enumerate()


# * Write JSON file
with open("./src/JSON/projects.json", "w") as outfile:
    json.dump(listProj, outfile, indent=2)

