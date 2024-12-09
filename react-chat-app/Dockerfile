# Etapa 1: Construir la aplicación realizar el build de react
FROM node:16 AS build

# Se establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para las dependencias de mi chat
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Se construye la aplicación React para producción
RUN npm run build

# se pone en produccion la aplicación front de mi chat
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Iniciar Nginx para servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
