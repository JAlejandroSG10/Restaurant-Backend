require('./DataBase/sync.js');

const connection = require('./DataBase/connection'); 
const express = require ('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force: false})
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(port, ()=> {
            console.log("la aplicacion corre en el puerto "+ port);
        })
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos', error);
    });

    
