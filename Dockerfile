# 1️⃣ Usa una imagen base de Node.js
FROM node:18

# 2️⃣ Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# 4️⃣ Instalar las dependencias del proyecto
RUN npm install

# 5️⃣ Copiar todo el código de la aplicación al contenedor
COPY . .

# 6️⃣ Exponer el puerto en el que corre la aplicación
EXPOSE 7002

# 7️⃣ Comando para iniciar el servicio
CMD ["node", "src/app.js"]
