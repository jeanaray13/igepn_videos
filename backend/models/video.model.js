//Importación de MongoDB
const mongoose = require('mongoose');

//Creación de un esquema
const IGVideoScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"],
    },
    videoURL: {
        type: String,
        required: [true, "VideoURL is mandatory"],
    },
    description:{
        type: String,
    },
});

//Definición del modelo
const IGVideo = mongoose.model('IGVideo', IGVideoScheme);
module.exports = IGVideo;