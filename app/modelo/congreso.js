var mongoose = require('mongoose');

module.exports = mongoose.model('congresos', {
    id_congreso: String, //identificador unico
    titulo: String,
    slogan: String,
    fecha: Date,
    patrocinadores:[
        {
            nombre:String, //si es empresa o institucion
            email: String,
            telefono: String,
            contacto: String //nombre completo del contacto o representante
        }
    ]
});
