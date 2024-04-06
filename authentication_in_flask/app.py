from flask import Flask,render_template 
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager,login_user,current_user,logout_user

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
    return User.query.get(user_id) #TO LOAD THE SAVED USER CREDENTIALS FROM THE SESSION

@app.route("/users")
def all_users():
    users=User.query.all()
    return render_template("all_users.html",users=users)

@app.route("/login/<name>")
def user_login(name):
    this_user=User.query.filter_by(username=name).first()
    login_user(this_user) #TO SAVE USER CREDENTIALS IN THE SESSION 
    return "user logged in:" + this_user.username


@app.route("/all_articles")
def all_articles():
    articles=Article.query.filter_by(author=current_user.id).all()
    return render_template("user_articles.html",articles=articles)
    
@app.route("/logout")
def user_logout():
    logout_user()
    return "user logged out"

