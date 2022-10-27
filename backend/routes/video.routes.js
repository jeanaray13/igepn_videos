//Llamada al controlador
const VideoController = require('../controllers/video.controller');

//Creación de las rutas de acuerdo a los métodos del controlador
module.exports = function(app){
    app.post('/api/video/new', VideoController.createVideo);
    app.get('/api/videos', VideoController.getAllVideos);
    app.get('/api/video/:id', VideoController.getVideo);
    app.put('/api/video/:id', VideoController.updateVideo);
    app.delete('/api/video/:id', VideoController.deleteVideo);
}