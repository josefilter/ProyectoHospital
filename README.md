# BACKEND (con Node, Express y MongoDB)


## Introducción

Para trabajar con el entorno de ejecución Node.js y su gestor de paquetes podemos realizar la instalación desde los repositorios de Debian/Ubuntu o derivadas con:

```console
sudo  apt  install  nodejs  npm
```

O, si deseamos una versión más actualizada, podemos recurrir al sitio oficial de Node.js:

[Página de descargas de node](https://nodejs.org/es/download/)


## Inicio de un proyecto

Para iniciar el proyecto hacemos:

```console
mkdir  proyectohospital
cd  proyectohospital

npm  init  -y
```

La última sentencia nos crea un archivo **`package.json`** con la metainformación del proyecto. La opción `y` o `--yes` es para que no nos pregunte y escriba una configuración por defecto en dicho archivo. Siempre podemos editarlo más adelante y modificar la version, añadir el autor entre otras cosas

> Nota: Es muy aconsejable crear un archivo `.gitignore` con el siguiente contenido:
> 
> ```
> node_modules/
> .env
> ```

De esta forma indicamos que la carpeta `node_modules` y el archivo `.env` no serán incluidos en el repositorio, sólo permanecerán en el directorio de trabajo.

El archivo `.env` (abreviatura de *environment*) es donde pondremos las **variables de entorno**, tales con la URL de conexión a la base de datos. 


## Edición de package.json

El archivo **`package.json`** es el archivo de gestión de proyecto y dependencias. En él. podremos editar el nombre del autor, la versión, el tipo de licencia, etc.

Una parte muy importante es indicar el punto de entrada. En este proyecto será el archivo **`server.js`**, que crearemos más adelante.

Para definir dicho punto de entrada, lo hacemos con la línea:

```
  "main": "server.js",
```

El archivo `package.json` tendrá una apariencia semejante a la siguiente:

```
{
  "name": "tiendabackend",
  "version": "1.0.0",
  "description": "Backend of a Fullstack webapp",
  "author": "jamj2000 at google dot com",
  "license": "GPL",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  "keywords": [
    "webapp",
    "backend",
    "fullstack"
  ]
}
```

También hemos modificado una de las líneas de `scripts`. En concreto:

```
    "dev": "nodemon server.js"
```

Esta línea indica que cuando ejecutemos `npm run dev` en el terminal, lo que se va a ejecutar en última instancia es el comando `nodemon server.js`.  

NOTA: Los scripts se ejecutan desde el terminal de texto con `npm run` *nombre_script*.

NOTA: `nodemon` es un paquete de Node.js que ejecuta node en mode monitor, es decir, está comprobando constantente cualquier cambio en nuestros archivos, y si detecta alguno, entonces vuelve a reiniciar el entorno de ejecución con los nuevos cambios. Esto es muy útil para el proceso de desarrollo de la aplicación.


## Servidor web

En el archivo **`server.js`** escribiremos el código para crear nuestro propio servidor web. En su versión mínima, solamente son necesarias 3 líneas.

```javascript
const express = require('express');

const app = express();

app.listen(3000);
```

Como nuestro backend se va a destinar a proporcionar una API RESTful y el intercambio de información se va a realizar en formato JSON, modificaremos el archivo anterior para que tenga la siguiente apariencia:

```javascript
const express = require('express');

const app = express();

// MIDDLEWARE
app.use(express.json());    

// SERVIDOR WEB
app.listen(3000, () => console.log("Servidor iniciado..."));
```

También hemos añadido un callback en la última línea para que, cuando el servidor web esté iniciado, nos muestre un mensaje indicando tal circunstancia.

Ya podemos probar nuestro servidor web, con el comando:

```console
npm  run  dev
```

No obstante, esto dará un error. El motivo es que necesitamos instalar los paquetes **`express`** y **`nodemon`**.

El primero se instalará como dependencia de aplicación y el segundo como dependencia de desarrollo. La diferencia entre uno y otro es que el primero es necesario para el funcionamiento de la aplicación, mientras que el segundo sólo es necesario para facilitar el trabajo de desarrollo.

Deberemos ejecutar:

```console
npm  install  express
npm  install  nodemon  -D
```

Si echamos un vistazo al archivo **`package.json`** veremos que dichos paquetes (también llamados módulos) han quedado registrados en dicho archivo:


```
{
  "name": "tiendabackend",
  "version": "1.0.0",
  "description": "Backend of a Fullstack webapp",
  "author": "jamj2000 at google dot com",
  "license": "GPL",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  "keywords": [
    "webapp",
    "backend",
    "fullstack"
  ],
  "devDependencies": {
    "nodemon": "^2.0.2"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

También veremos que se ha creado una carpeta `node_modules` con dichos módulos en su interior, además de muchos otros que son dependencias de los anteriores.

Ahora, ya podremos ejecutar `npm run dev`, y si no hay errores, podremos abrir el navegador y acceder a la url `http://localhost:3000`.


## Base de datos

Como servidor de base de datos vamos a usar MongoDB en su versión Cloud. Para ello podemos registrarnos en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) que aunque no nos proporciona mucho almacenamiento tenemos más que suficiente para lo que queremos hacer.

Una vez registrados, crearemos un cluster luego una base de datos y un usuario y contraseña para acceder a dicha base de datos. A dicho usuario le daremos permisos de lectura y escritura.

Una vez realizados estos pasos, conseguiremos la URL de acceso para aplicación de Node.js. Tiene un formato similar al siguiente:

`mongodb+srv://`***`usuario`***`:`***`contraseña`***`@`***`servidor`***`/`***`basedatos`***`?retryWrites=true&w=majority`

Y en nuestro archivo **`.env`** escribiremos la línea:

`DB_URI=mongodb+srv://`***`usuario`***`:`***`contraseña`***`@`***`servidor`***`/`***`basedatos`***`?retryWrites=true&w=majority`

Deberemos sustituir `usuario`, `contraseña`, `servidor` y `basedatos` por los nuestros.


## Todos los archivos

`**package.json**`

[package.json](https://github.com/josefilter/ProyectoHospital/blob/master/package.json)

`**controller.js**`

[controller.js](https://github.com/josefilter/ProyectoHospital/blob/master/controllers.js)

`**models.js**`

[models.js](https://github.com/josefilter/ProyectoHospital/blob/master/models.js)

`**.gitignore**`

[.gitignore](https://github.com/josefilter/ProyectoHospital/blob/master/.gitignore)

`**package-lock.json**`

[package-lock.json](https://github.com/josefilter/ProyectoHospital/blob/master/package-lock.json)

`**routes.js**`

[routes.js](https://github.com/josefilter/ProyectoHospital/blob/master/routes.js)

`**server.js**`

[server.js](https://github.com/josefilter/ProyectoHospital/blob/master/server.js)
