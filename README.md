Sistema de Registro CEI&A
============

## Librerias y frameworks: ##
* NodeJs
* AngularJs
* Express
* JQuery
* MongoDB (Gestor de base de datos)
* Mongoose (ODM para Node.js)
* Bootstrap (Parte Frontend de la app)

## Para poder ejecutar este proyecto haz lo siguiente: ##
* **Instalar [MongoDB](http://docs.mongodb.org/manual/installation/)**
* **Instalar [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)**  
* **Luego en una terminal ejecutar lo siguiente:** (en la carpeta del proyecto)

`$npm install`  Para instalar el driver de mongoose, express y modulos de node.

`$node server.js`  Para iniciar el server (ejecuta este comando luego de que las depencias se terminen de instalar)

* **Despues abre el navegador y ve a `http://localhost:8080`**

* **Para cambiar el puerto de escucha de la api de node:**

 Archivo: `server.js` 

 Modificar `8080` por el puerto que desees utilizar en la linea: `var port = process.env.PORT || 8080;`
 
## Para desarrolladores
Si eres desarrollador y deseas manterner la aplicación ejecuntandose sin preocuparte por reiniciarla cada vez que se hagan cambios al código, recomendamos usar [nodemon](https://github.com/remy/nodemon).

Para instalar nodemon abre la shell y haz los siguiente:

`$sudo npm install -g nodemon`  Para instalar nodemon globalmente.

Ahora podemos ejecutar nuestra aplicación usando nodemon

`$nodemon server.js`

Luego abre el navegador y ve a `http://localhost:8080`

Ya no tendras que preocuparte por hacer `Ctrl + c` para reiniciar la aplicación cada vez que cambies algo en el código, ahora nodemon tomara control de tu aplicación y se reiniciará cada vez que edites algún archivo del código fuente. 


