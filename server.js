
// config -- model --- controllers --- routes --- server.js
const dotenv = require('dotenv')
dotenv.config()

//Llamada de express y el puerto
const express = require('express');
const app = express();
const port = process.env.PORT_BACKEND;
const cors = require('cors'); //Solicitud de origen cruzado

//Llamada a la configuración de MongoDB
require('./backend/config/mongoose.config');

//Llamada a los middlewares (funciones intermedias)
app.use(cors());
app.use(express.json()); //Utiliza métodos HTTP y obtiene los datos en JSON
app.use(express.urlencoded({ extended: true }));  //Obtiene los datos de la URL

//Llamada a las rutas
const videoRoutes = require('./backend/routes/video.routes');
videoRoutes(app); //Envía los datos a account.routes

//Establecimiento del puerto
app.listen(port, () => {console.log("Servidor escuchando en el puerto", port);})