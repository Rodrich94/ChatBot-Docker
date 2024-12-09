import requests  # Asegúrate de importar la librería requests
from flask import Blueprint, render_template, jsonify, request

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('base.html')

@main.route('/api/chat', methods=['POST'])
def chat():
    # Obtener datos enviados en la solicitud
    data = request.json
    user_message = data.get('prompt', '')

    # Respuesta simulada (sin consultar al servicio externo)
    response = {
        "choices": [
            {
                "index": 0,
                "text": "El_Diego: esto es un mensaje de prueba.",
                "finish_reason": "test"
            }
        ]
    }

    # Devolver la respuesta formateada
    return jsonify(response)
