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

    # Realizar la solicitud a otro servicio (por ejemplo, tu servicio en 192.168.10.164)
    try:
        external_response = requests.post('http://192.168.10.164:8000/v1/completions', json={
            'model': 'meta-llama/Llama-3.2-1B-Instruct',  # Aquí puedes enviar los mismos parámetros que tu API espera
            'prompt': user_message,
            'max_tokens': 300,
            'temperature': 0.2
        })

        # Verificar si la solicitud fue exitosa
        if external_response.status_code == 200:
            external_data = external_response.json()
            # Formatear la respuesta para devolverla
            response = {
                "choices": [
                    {
                        "index": 0,
                        "text": external_data.get('choices', [{}])[0].get('text', 'No hay respuesta'),
                        "logprobs": None,
                        "finish_reason": "length",
                        "stop_reason": None,
                        "prompt_logprobs": None
                    }
                ]
            }
        else:
            # Manejar errores si la respuesta externa no es exitosa
            response = {
                "choices": [
                    {
                        "index": 0,
                        "text": "Lo siento, no pude obtener una respuesta del servicio externo.",
                        "logprobs": None,
                        "finish_reason": "error",
                        "stop_reason": None,
                        "prompt_logprobs": None
                    }
                ]
            }
    except requests.exceptions.RequestException as e:
        # Manejar excepciones si hay un error en la solicitud HTTP
        response = {
            "choices": [
                {
                    "index": 0,
                    "text": f"Error al conectar con el servicio externo: {str(e)}",
                    "logprobs": None,
                    "finish_reason": "error",
                    "stop_reason": None,
                    "prompt_logprobs": None
                }
            ]
        }

    # Devolver la respuesta formateada
    return jsonify(response)
