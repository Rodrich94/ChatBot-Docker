from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'

    # Habilitar CORS
    CORS(app)

    from .routes import main
    app.register_blueprint(main)

    return app
