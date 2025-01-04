# Microservicio de Carga de Archivos PDF

Este es un microservicio desarrollado en Node.js y Express que permite a los usuarios cargar archivos PDF. El servicio valida el tipo de archivo, el tamaño y almacena los archivos en el servidor con un nombre único basado en la fecha y hora de carga.

## Características Principales

- **Carga de archivos PDF**: Solo se aceptan archivos PDF válidos.
- **Validación de tipo y tamaño**: El archivo debe ser un PDF y no puede superar los 5 MB.
- **Almacenamiento seguro**: Los archivos se almacenan con un nombre único basado en la fecha y hora de carga.
- **Interfaz de usuario amigable**: Incluye una interfaz para seleccionar y cargar archivos, con alertas de éxito y error.


Este microservicio almacena los archivos PDF en el servidor de manera segura, generando un nombre único para cada archivo basado en la fecha y hora de carga.

## Características

- **Nombres únicos**: Los archivos se nombran utilizando un formato que incluye la fecha y hora de carga, evitando colisiones de nombres.
- **Ruta de almacenamiento**: Los archivos se guardan en una carpeta específica en el servidor.

## Implementación

El almacenamiento se configura en el controlador `multer.js`, donde se define la lógica para generar el nombre del archivo y la ruta de destino.
## Requisitos Previos

- Node.js (v16 o superior)
- npm (v8 o superior)

## Configuración del Proyecto

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/loader_multer.git
   cd loader_multer
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional) :
   Crea un archivo `.env` en la raíz del proyecto si necesitas configurar variables como el puerto del servidor.

4. **Ejecutar el servidor**:
   ```bash
    npm run dev
   ```
   El servidor estará disponible en `http://localhost:8080`

# Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas y archivos:

- **`app.js`**: Archivo principal que configura el servidor Express y define las rutas.
- **`controllers/multer.js`**: Define las rutas para cargar archivos.
- **`public`**: Contiene los archivos estáticos (CSS y JS) para la interfaz de usuario.
- **`views`**: Contiene las plantillas Handlebars.
- **`package.json`**: Define las dependencias y scripts del proyecto.

## Dependencias

- **`Express`**: Framework para construir aplicaciones web en Node.js.
- **`Multer`**: Middleware para manejar archivos subidos a través de formularios.
- **`Handlebars`**: Motor de plantillas para renderizar vistas.
- **`Cors`**: Middleware para habilitar solicitudes entre dominios.

## Ejecucion en Desarrollo

Para ejecutar el proyecto en modo de desarrollo con recarga automática:
 ```bash
    npm run dev
   ```

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para obtener más información

## Contribuciones
Las contribuciones son bienvenidas. Por favor, crea un fork del proyecto y envía una solicitud de pull para cualquier cambio que desees realizar.


## Autores
- **[Paul Buitron]**: [pbuitron.be@gmail.com] - [+51 936 312 086] - [https://web-curriculo-vert.vercel.app/]

## Agradecimientos
- A todos los contribuyentes y mantenedores de las dependencias utilizadas en este proyecto.

## Historial de Versiones
- **Versión 1.0.0**: Versión inicial del proyecto.

