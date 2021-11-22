const { america } = require('colors');

//Traemos la configuracion de la base de datos
//Esto se puso en automaico?
const { User } = require('../db');

//Traemos la funcion de rutas de express:
const router = require('express').Router();

//

// Al ir a /User, llegamos a america, luego
// podemos colocar todas las rutas que queramos
router.get('/', async (req, res) => {

    //Metemos en 'users' todos las usuarios
    const users = await User.findAll();
    res.json(users);
    console.log('Solicitud de todos los usuarios');

});

router.post('/', async (req, res) => {

    //Metemos en 'users' el body de nuestro post
    const users = await User.create(req.body);
    res.json(users);
    console.log('Enviado solicitado');
});

//Exportamos el modulo router
module.exports = router;