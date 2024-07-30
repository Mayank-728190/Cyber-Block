# app.py

from flask import Flask, render_template
from models import db, Article
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cyber_news.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def home():
    latest_articles = Article.query.order_by(Article.published_at.desc()).limit(5).all()
    return render_template('index.html', articles=latest_articles)

with app.app_context():
    db.create_all()
if __name__ == '__main__':
    app.run(debug=True)
