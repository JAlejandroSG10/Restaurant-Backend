const { Sequelize } = require('sequelize')

var dataBase = 'restaurantDB';
var UserName = 'postgres';
var password = '2020';

const connection = new Sequelize(dataBase, UserName, password,{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = connection