var mongoose = require('mongoose');

module.exports = mongoose.model('congresos', {
    id_congreso: String, //identificador unico
    fecha: Date,
    patrocinador: String,
    tipo: String,
    monto: Number
});
