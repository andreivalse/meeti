const Sequelize = require('sequelize');

module.exports = new Sequelize('meeti', 'avalencia', 'i9620113', {
    host: 'localhost',
    port: '5432',
    dialect : 'postgres',
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging : true //deshabilitar acciones terminal
})