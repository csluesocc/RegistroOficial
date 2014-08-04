Sistema de Registro CEI&A
============

## Librerias y frameworks: ##
* NodeJs
* AngularJs
* Express
* JQuery
* MongoDB (Gestor de base de datos)
* Bootstrap (Parte Frontend de la app)

## Para poder ejecutar este proyecto haz lo siguiente: ##
* **Instalar [MongoDB](http://docs.mongodb.org/manual/installation/)**
* **Instalar [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)**

  
## Luego en una terminal ejecutar los siguiente (en la carpeta del proyecto): ##

```
$ npm install   #Instalará el driver de mongoose, express y modulos de node para el server
$ node server.js   #Inica el server (ejecuta este comando luego de que las depencias se terminen de instalar)
```
 Despues abre el navegador y ve a ´http://localhost:8080´

 *Puedes cambiar el puerto de escucha de la api de node modificando el archivo ´server.js´ en la linea ´var port = process.env.PORT || 8080;´


