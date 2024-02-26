const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class product extends Model{}

    product.init({
        productid:{
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncremental: true
        },
        productName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productDescription:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        restaurantId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize: connection,
        modelName: 'product',
        paranoid: true,
        deleteAt: 'destroyTime'
    });
    module.exports = product;