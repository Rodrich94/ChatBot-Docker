# Usar una imagen base de Python de dockerhub
FROM python:3.10-slim

# Estableci el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copie los archivos a la carpeta del contenedor
COPY . /app

# Instalo las dependencias y librerias necesarias para mi proyecto en python
RUN pip install -r requirements.txt

# Exponer el puerto en el que la app de Flask estará corriendo (por defecto 5000)
EXPOSE 5000

# Variable de entorno flask
ENV FLASK_APP=run.py 

CMD ["flask", "run", "--host=0.0.0.0"]