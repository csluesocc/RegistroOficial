//login en un solo escript hize el modelo y controller :)
var mongoose = require('mongoose');

//nos conectamos a la base de datos 'login'
//obtenemos la conexión
var db = mongoose.connection;

var Schema = mongoose.Schema
// creo un nuevo modelo q creara una coleccion yamada users
var usuario_schema = new Schema({
   username   : String,
   password    : String,
});
//declaramos el objecto User para poder utilizarlo en las rutas
var User = db.model('User', usuario_schema)

//Sesiones
var express = require('express');
var app = express();
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(express.cookieParser({secreto:'secret'}));//necesario para utilizar sesiones
//app.use(express.session({cookie: {maxAge: 900000}}));//tiempo de expiración de la sesión

//operacion de login


app.post('/registrar', function(req, res) {
   //Obtenemos los datos username y password
   var username = req.body.username // el user name seria el carnet
   var password = req.body.password
   //Encriptamos por medio de una función la contraseña 
   var passEncriptada = encriptar(username, password)
   //Buscamos si el usuario existe
   User.findOne({username:username},function(err, user){
      if(!user) {
         var user = new User({
            username : username,
            password : passEncriptada
         })
        //guardamos el usuario
         user.save()
res.send('Usuario Guardado con exito')
     
      }
      else
         res.send('Ese Usuario ya existe en la db intentalo de nuevo')


})
  
})

function encriptar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}


app.post('/login', function(req, res) {
//req.session.nuevaSesion = req.body.username // creo una variable de sesion 
   var username = req.body.username
   var password = req.body.password 
   var passEncriptada = encriptar(username,password)

   User.findOne({username:username},function (err, user){
      if(user) {
    //comprabamos si la contraseña encriptada es igual a la contraseña encriptada anteriormente
        
        if(user.password === passEncriptada)
 // verificaa que el pass exita 

       {
        req.session.nuevaSesion = req.body.username // creo una variable de sesion 
        //si no existe la sesion del usuario redirigimos al index
        if(!req.session.nuevasesion)
        { 
            res.redirect("index.html");
        }
        //en otro caso mostramos la vista
        else 
        {
            res.redirect('control.html');
        }

      
     } else  
        res.send('contraseña incorrecta')
      
       
      } else 
res.send('Ese usuario no existe')

})     
});  

//ruta que elimina las sesiones y redirige
    app.post("/removeSesion", function(req, res){
        //eliminamos las sesiones y redirigimos
        res.redirect("index.html");
        req.session.destroy();
        
    })
 