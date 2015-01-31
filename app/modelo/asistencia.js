var mongoose = require('mongoose');

module.exports = mongoose.model('asistencia', {
    id_participante: String, //identificador unico
    eventos:[String], //ids de los eventos que ha asistido el participante
    id_congreso: String //id del congreso, se repite aca por conveniencia para hacer las queries, revisar esto
}, 'asistencia');
//el ultimo parametro forza al modelo a mantener el nombre en singular y no dejar que mongoose asigne un nombre singular
