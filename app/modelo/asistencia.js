var mongoose = require('mongoose');

module.exports = mongoose.model('asistencia', {
    id_participante: String, //identificador unico
    eventos:[String], //ids de los eventos que ha asistido el participante
    id_congredo: String //id del congreso, se repite aca por conveniencia para hacer las queries, revisar esto
});
