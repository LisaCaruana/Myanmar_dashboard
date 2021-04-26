

# Import our modules
import pymongo
import pandas as pd
from flask import Flask, render_template, jsonify
from flask_cors import CORS

# Create an instance of our Flask app.
app = Flask(__name__)
CORS(app)

# Create connection variable
conn = 'mongodb://localhost:27017'
# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. 
db = client.MyanmarDB
# Available routes
@app.route("/")
def home():
    return render_template('index.html')
        # f"Welcome to the what is happening in Myanmar DataBase!<br/>"
        # f"<br/>"
        # f"Below route returns all records from database<br/>"
        # f"/api/v1.0/Myanmar_Records<br/>"
      
@app.route("/api/Myanmar_Records")
def myanmar():
    # Store collection in a list
    Myanmar_Records = list(db.Myanmar_Records.find())
    # Create empty list and fill with collection records
    data=[]
    for item in Myanmar_Records:
        myanmar_dict={}
        myanmar_dict['event_date']=item['event_date']
        myanmar_dict['event_type']=item['event_type']
        myanmar_dict['sub_event_type']=item['sub_event_type']
        myanmar_dict['actor1']=item['actor1']
        myanmar_dict['actor2']=item['actor2']
        myanmar_dict['location']=item['location']
        myanmar_dict['latitude']=item['latitude']
        myanmar_dict['longitude']=item['longitude']
        myanmar_dict['fatalities']=item['fatalities']
        data.append(myanmar_dict)

    return jsonify(data)
   

if __name__ == "__main__":
    app.run(debug=True)
