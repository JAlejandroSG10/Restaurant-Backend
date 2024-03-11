require('./DataBase/sync.js');

const connection = require('./DataBase/connection'); 
const express = require ('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restaurantrouter.js');
const productrouter = require('./Routers/productrouter.js');
const departmentrouter = require('./Routers/departmentrouter.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, ()=> {
    console.log("The aplicattion is running in port: "+ port);
})



// api
app.use('/api', restaurantrouter);  
app.use('/api', productrouter);
app.use('/api', departmentrouter);
