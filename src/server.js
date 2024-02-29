require('./DataBase/sync.js');

const connection = require('./DataBase/connection'); 
const express = require ('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restaurantrouter.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force: false})
    .then(() => {
        console.log('Synchronized DataBase');
        app.listen(port, ()=> {
            console.log("The aplicattion is running in port: "+ port);
        })
    })
    .catch((error) => {
        console.error('Error syncing DataBase', error);
    });

// api
app.use('/api', restaurantrouter);    
