const connection = require('./connection.js');

//models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product.js');
const department = require('../Models/department.js');
const city = require('../Models/city.js');

//JSON
const departmentjson = require('./jsonFiles/departmentjson.js');
const cityjson = require('./jsonFiles/cityjson.js');

async function sync(){
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    });
    department.hasMany(city, {
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });

    city.belongsTo(department, {
        foreignKey: 'departmentId'
    });

    //foreignKey department : city
    city.hasMany(restaurant, {
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });

    restaurant.belongsTo(city, {
        foreignKey : 'cityId'
    });

    await connection.sync({force: false})
    .then(() => {
        console.log('Synchronized DataBase');
        
    })
    .catch((error) => {
        console.error('Error syncing DataBase', error);
    });

//Create Json
departmentjson.createDepartments();
cityjson.createCities();
    
}

sync();