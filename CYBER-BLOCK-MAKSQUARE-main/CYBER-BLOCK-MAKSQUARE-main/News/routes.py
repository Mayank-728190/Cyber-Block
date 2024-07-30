from flask import render_template,url_for,redirect
from app import app
from models import Article

@app.route('/')
def index():
    # Retrieve latest articles from the database
    latest_articles = Article.query.order_by(Article.published_at.desc()).limit(5).all()
    return render_template('index.html', latest_articles=latest_articles)


@app.route('/article/<int:article_id>')
def article_detail(article_id):
    # Retrieve article details from the database based on article_id
    article = Article.query.get(article_id)
    if article:
        return render_template('article_detail.html', article=article)
    else:
        return redirect(url_for('index'))