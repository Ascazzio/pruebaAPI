//Aqui va la configuracion de la base de datos:

//Llamamos a nuestro ORM
const Sequelize = require('sequelize');

//Llamamos al modelo:
const UserModel = require('./models/users');

//Llamamos a nuestra base de datos:
// const sequelize = new Sequelize('nombre_db', 'usuario', 'password')

const sequelize = new Sequelize('prueba', 'remote', 'Geekmysql*', {
    host: '192.168.1.48',
    dialect: 'mysql'
});

//Lanzamos la funcion:
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    });

module.exports = {
    User
}