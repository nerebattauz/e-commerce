# TP Final React | E-commerce Galatea

Plataforma de comercio electrónico de Galatea, un emprendimiento de diseño gráfico y objetos personalizados. Diseñada para ofrecer una experiencia de compra optimizada, segura y rápida.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

---

## Pre-requisitos 👋

Para ejecutar este proyecto necesitas:

- **Node.js**
- **Git**
- **Gestor de paquetes** (pnpm)

---

## Instalación 🛠️

Sigue estos pasos para configurar el entorno de desarrollo:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/galatea-ecommerce.git
   ```
2. **Ingresa en el directorio del proyecto:**
   ```bash
   cd galatea-ecommerce
   ```
3. **Instala las dependencias:**
   ```bash
   pnpm install
   ```
4. **Configura firebase**
   
   - Crea un proyecto en Firebase Console.
   - Configura Firebase Authentication (correo/contraseña) y Firestore Database.
   - Obtén las credenciales de Firebase (apiKey, authDomain, projectId, etc.).
   - Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
   VITE_API_KEY=TU_API_KEY VITE_AUTH_DOMAIN=TU_AUTH_DOMAIN VITE_PROJECT_ID=TU_PROJECT_ID VITE_STORAGE_BUCKET=TU_STORAGE_BUCKET VITE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID VITE_APP_ID=TU_APP_ID
6. **Inicia el servidor de desarrollo:**
   ```bash
   pnpm run dev
   ```

## Despliegue 📦

Este proyecto está configurado para desplegarse automáticamente en **Netlify**. Para desplegar manualmente:

1. **Conecta el repositorio a Netlify.**
2. **Configura las variables de entorno en la plataforma.**
3. **Realiza un push a la rama principal para iniciar el despliegue.**

---

## Construido con 🛠️

- Vite.js - Framework de desarrollo
- Netlify - Hosting y funciones serverless
- Chakra V2 - Estilos y diseño

## Capturas de pantalla

Podés hacer una previsualización de la página web acá https://imgur.com/a/c2WmdAn





