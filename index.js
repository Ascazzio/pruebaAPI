//Archivo principal de la API

//Traemos express
const express = require('express');
const app = express();
const PORT = 3000;

//Traemos los routes
const UserRouter = require('./views/UserRouter');

// //"BodyParser"
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Traemos la configuracion:
require('./db');

//Rutas
//Todas las rutas con /user, redirigelas a UserRouter
app.use('/user', UserRouter);
//Levantamos la aplicacion
app.listen(PORT, () => {
    console.log('Servidor arrancado');
});