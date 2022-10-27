/*Librería para crear archivos de configuración*/
const dotenv = require('dotenv');
dotenv.config()

const db_name = process.env.db_name
const username = process.env.username
const password = process.env.password
const IP = process.env.IP
const authsource = process.env.authsource

/*Librería para realizar la conexión a MongoDB*/
const mongoose = require('mongoose');

mongoose.connect("mongodb://"+process.env.IP+":27017/"+db_name,{
  "auth": {
    "username": username,
    "password": password
    },
    "authSource": authsource
      
  }
)
.then(()=>console.log(`Establecida la conexión a la base de datos ${db_name}`))
.catch(err => console.log("Algo impide conectarse a la base de datos",err))