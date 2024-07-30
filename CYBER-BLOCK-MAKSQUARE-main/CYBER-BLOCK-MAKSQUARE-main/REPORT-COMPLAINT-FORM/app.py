from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv()
# Connect to MongoDB Atlas
MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)
db = client["contact_form"]
collection = db["submissions"]

@app.route('/')
def index():
    return render_template('index1.html')

@app.route('/submit', methods=['POST'])
def submit():
    category = request.form['Category']
    datetime_str = request.form['Date_Time_Incident']
    date_time_incident = datetime.strptime(datetime_str, '%Y-%m-%dT%H:%M')
    location = request.form['Location']
    description = request.form['Description']
    name = request.form['Name']
    email = request.form['Email_Address']
    contact_number = request.form['Contact_Number']

    # Insert submission into MongoDB Atlas
    submission = {
        'Category': category,
        'Date_Time_Incident': date_time_incident,
        'Location': location,
        'Description': description,
        'Name': name,
        'Email_Address': email,
        'Contact_Number': contact_number
    }
    collection.insert_one(submission)

    return jsonify({'message': 'Submission successful'})

if __name__ == '__main__':
    app.run(debug=True)
