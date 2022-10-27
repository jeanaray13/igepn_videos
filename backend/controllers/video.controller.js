//Obtención del modelo
const IGVideo = require('../models/video.model');;

//Crear una publicación
module.exports.createVideo = (request, response) => {
    const {name, videoURL, description} = request.body; //Obtener las variables de la solicitud
    IGVideo.create({name, videoURL, description})
    .then(video => response.json({insertedVideo: video, msg: 'Successful creation'}))
    .catch(err => response.status(400).json(err))
}
//Mostrar todos los videos
module.exports.getAllVideos = (_,response) => {
    IGVideo.find({}) //Recuperar todos los videos de la consulta
    .then(retrievedVideos => response.json(retrievedVideos))
    .catch(err => response.json(err))
}

//Mostrar un video creado
module.exports.getVideo = (request,response) => {
    IGVideo.findOne({_id: request.params.id}) //Recupera un usuario de la consulta de acuerdo al ID ingresado en la URL
    .then(video => response.json(video))
    .catch(err => response.json(err))
}

//Actualizar un video
module.exports.updateVideo = (request,response) => {
    IGVideo.findOneAndUpdate({_id: request.params.id},request.body,{new:true})
    .then(updateVideo => response.json(updateVideo))
    .catch(err => response.json(err))
}

//Borrar un video
module.exports.deleteVideo = (request,response) => {
    IGVideo.deleteOne({_id: request.params.id})
    .then(deleteVideo => response.json(deleteVideo))
    .catch(err => response.json(err))
}