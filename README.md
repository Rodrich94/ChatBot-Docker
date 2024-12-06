# Chatbot con Flask y React

## Descripción de la Aplicación

Esta aplicación es un **chatbot** desarrollado utilizando **Flask** en el backend y **React** en el frontend. El chatbot interactúa con los usuarios, respondiendo a sus preguntas o solicitudes, y está configurado para conectarse a la API devolviendo un mensaje de prueba.

### Características principales:
- **Frontend**: React, sirve la interfaz de usuario del chatbot donde los usuarios pueden interactuar.
- **Backend**: Flask, maneja las solicitudes API y se conecta a un modelo de lenguaje para generar respuestas automáticas.
- **Contenedores Docker**: Ambos servicios (frontend y backend) están empaquetados en contenedores Docker para una fácil implementación y despliegue.

---
## Lo aprendido en el curso:
## ¿Qué es Docker?

**Docker** es una plataforma de software que permite crear, probar y ejecutar aplicaciones en contenedores. Un contenedor es una unidad ligera y ejecutable de software que incluye todo lo necesario para ejecutar una aplicación: el código, las bibliotecas, las dependencias y la configuración del sistema operativo.

### ¿Para qué se utiliza Docker?

- **Empaquetado de aplicaciones**: Puedes empaquetar tu aplicación con todas sus dependencias en un contenedor para asegurar que se ejecute de manera consistente en diferentes entornos.
- **Escalabilidad**: Puedes crear y administrar múltiples contenedores, escalando tu aplicación según las necesidades.
- **Desarrollo y prueba más rápido**: Docker permite que los desarrolladores creen entornos de prueba idénticos a los de producción, lo que reduce los problemas de compatibilidad.
- **Facilita el despliegue**: Los contenedores pueden ser fácilmente implementados en servidores y orquestados con herramientas como Docker Compose.

---

## ¿Qué es Docker Compose?

**Docker Compose** es una herramienta que permite definir y ejecutar aplicaciones multi-contenedor. Con Compose, puedes configurar todos los contenedores de tu aplicación en un archivo `docker-compose.yml`, definir cómo deben interactuar entre ellos y luego iniciar y administrar estos contenedores con un solo comando.

### ¿Para qué se utiliza Docker Compose?

- **Gestión de aplicaciones multi-contenedor**: Si tu aplicación consta de múltiples servicios (como un frontend y un backend), Docker Compose te permite definir todos esos servicios y sus interacciones.
- **Facilita el desarrollo y la integración**: Puedes definir redes, volúmenes y dependencias entre servicios en un solo archivo, lo que facilita la configuración y ejecución de aplicaciones complejas.
- **Configuración reproducible**: Con Docker Compose, puedes asegurar que la configuración de tu aplicación es la misma en todos los entornos.

---

## Instrucciones para Construir y Correr la Aplicación

### 1. **Clonar el repositorio**

Si aún no lo has hecho, clona este repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```
# Guía para Construir y Ejecutar la Aplicación con Docker y Docker Compose

Este proyecto consta de dos partes principales: un **frontend** (React) y un **backend** (Flask). A continuación, te mostraré cómo construir y ejecutar ambos contenedores utilizando Docker y Docker Compose.

## Comandos para Docker

### 1. **Construir la Imagen y Etiquetarla**

#### Construir una imagen desde un Dockerfile

Para construir una imagen Docker a partir del archivo `Dockerfile` en el directorio actual:

```bash
docker build -t nombre-imagen .
```

