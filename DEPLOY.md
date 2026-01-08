# Guía de Despliegue Backend

## 1. Despliegue en Render (Backend)

1.  Sube tu código a GitHub (asegúrate de incluir la carpeta `backend`).
2.  Crea una cuenta en [Render](https://render.com).
3.  Haz clic en **"New +"** y selecciona **"Web Service"**.
4.  Conecta tu repositorio de GitHub.
5.  Configura el servicio con los siguientes datos:
    *   **Name:** `portfolio-backend` (o el que prefieras)
    *   **Root Directory:** `backend` (IMPORTANTE: Esto le dice a Render que el código está en esa carpeta)
    *   **Environment:** Node
    *   **Build Command:** `npm install`
    *   **Start Command:** `node server.js`
6.  Haz clic en **"Create Web Service"**.
7.  Espera a que el despliegue finalice. Render te dará una URL (ej: `https://portfolio-backend.onrender.com`).
8.  **IMPORTANTE:** Copia esa URL.

## 2. Configuración del Frontend

1.  En tu proyecto local, crea o edita el archivo `.env.production` en la raíz (junto a `package.json`).
2.  Agrega la siguiente línea con la URL de tu backend en Render:
    ```
    VITE_API_URL=https://tu-backend-en-render.onrender.com
    ```
3.  Haz commit y push de este cambio.
4.  Vuelve a desplegar tu frontend (si usas GitHub Pages, ejecuta `npm run deploy`).

## 3. Evitar que el servidor se duerma (UptimeRobot)

Render "duerme" los servicios gratuitos tras 15 minutos de inactividad. Para evitarlo:

1.  Crea una cuenta en [UptimeRobot](https://uptimerobot.com).
2.  Haz clic en **"Add New Monitor"**.
3.  Configuración:
    *   **Monitor Type:** HTTP(s)
    *   **Friendly Name:** Portfolio Backend
    *   **URL (or IP):** `https://tu-backend-en-render.onrender.com/health` (o simplemente la raíz `/api/data`)
    *   **Monitoring Interval:** 5 minutes (o 10)
4.  Haz clic en **"Create Monitor"**.

Esto enviará una petición a tu servidor cada 5 minutos, manteniéndolo activo.
