from flask import Flask,render_template 
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app=Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite://logindata.sqlite3"
app.config['SECRET_KEY']="somerandomsecretstring"

db=SQLAlchemy()
db.init_app(app)

login_manager=LoginManager()
login_manager.init_app(app)

app.app_context().push()

class User(db.model):
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(30),unique=True,nullable=False)

class Article(db.model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(30),unique=True,nullable=False)
    desc=db.Column(db.String(),nullable=False)
    author=db.Column(db.Integer(),db.ForeignKey("user.id"))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

