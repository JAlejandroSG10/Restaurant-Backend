require('express')
const bcrypt = require('bcrypt')
const user = require('../Models/user')

async function listUserRole(req, res){
    try{
        res.json(await user.userRoles().sort())
    }
    catch (e){
        console.log(e);
    }
}

async function createUser(req, res){
    try{
        const hashPassword = await bcrypt.hash(req.body.userPassword, 10)


        await user.create({
            userIdentification: req.body.userIdentifiaction,
            userName: req.body.userName,
            userPassword: hashPassword,
            userRole: req.body.userRole
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports ={
    listUserRole,
    createUser
}