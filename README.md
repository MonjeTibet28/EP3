
# Microservicio de Login para Aplicaciones - README

## Introducción

Este proyecto tiene como objetivo centralizar y estandarizar la autenticación de usuarios para múltiples aplicaciones internas y externas de una empresa comercial. Actualmente, cada aplicación maneja su propio sistema de autenticación, lo cual genera redundancias y dificultades en la gestión de usuarios. Con este microservicio, buscamos mejorar la seguridad y eficiencia del sistema de login utilizando tecnologías modernas y prácticas recomendadas de seguridad.

## Características

* Desarrollado en Node.js
* API tipo RESTful
* Gestión de usuarios: registro y login
* No utiliza tokens
* Frontend desarrollado sin frameworks ni jQuery
* Base de datos MongoDB
* Encriptación de contraseñas utilizando bcryptjs
* Validación de contraseñas de usuarios

## Tecnologías Utilizadas
* Node.js
* Express.js
* MongoDB
* bcryptjs (para encriptación de contraseñas)
* dotenv (para manejar variables de entorno)
* cors (para permitir solicitudes de diferentes dominios)
* Register posee un formulario que contiene Nombres, Apellidos, Correo,  Contraseña y validarContraseña
* Login posee un formulario que contiene Correo y contraseña 

## Instalación

Para ejecutar este proyecto localmente, asegúrate de tener instalado Node.js y MongoDB. Luego, clona este repositorio y ejecuta los siguientes comandos:

```
npm install
```

### Librerias usadas
 express, bcryptjs, nodemon, cors, mongoose, dotenv

## Configuración 

Contenido del archivo .env

```
HOST = 4000
DATABASE = 'mongodb://127.0.0.1:27017/ep3'
```

## Ejecución 

Para ejecutar ingrese en la terminal el siguiente comando

```
npm run dev
```
## Uso 

usa los siguientes endpoints:  

### Login
```
GET / 
POST /login
```

el login usa los siguientes datos:

* Correo electrónico
* Contraseña



### Register

```
GET /register
POST /register
```

el register usa los siguientes datos:

* Nombres
* Apellidos
* Correo electrónico
* Contraseña
* repetir Contraseña

## Seguridad
Las contraseñas de los usuarios están encriptadas antes de ser almacenadas en la base de datos utilizando bcryptjs para asegurar la seguridad de los datos.
