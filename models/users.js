// const { Sequelize } = require('sequelize, types');

//El nombre de la tabla sera el nombre del .js
//Creara la tabla si no existe

module.exports = (sequelize, type) => {
    return sequelize.define('user', {

        // id: {
        //     type: type.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        name: type.STRING,
        phone: type.INTEGER,
        admin: type.BOOLEAN
        
    });
};