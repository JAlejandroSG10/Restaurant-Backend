require('express')
const bcrypt = require('bcrypt')
const user = require('../Models/user')
const jwt = require('jsonwebtoken')

//ESTO ES SOLO PARA LA PRÁCTICA DEL EJERCICIO DEL JWT - ESTO NO ES RECOMENDADO PARA NINGUN DESARROLLO
//THIS IS ONLY FOR JWT EXERCISE PRACTICE - THIS IS NOT RECOMMENDED FOR ANY DEVELOPMENT
const jwtPassword = 'qwe987gfd'

async function listUserRoles(req, res){
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
            userIdentification: req.body.userIdentification,
            userIdentificationType : req.body.userIdentificationType,
            userName : req.body.userName,
            userPassword: hashPassword,
            userRole: req.body. userRole
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch (e){
        console.log(e);
    }
}

async function login (req, res){
    try{
        const userData = await user.findOne({ where: { userIdentification: req.body.userIdentification}})

        if(!userData)
            return res.status(401).json({message: "User not found"})

        const validPassword = await bcrypt.compare(req.body.userPassword, userData.userPassword)

        if(!validPassword)
            return res.status(401).json({message: "Invalid password"})

        const token = jwt.sign(
            { userId: userData.userId, userRole: userData.userRole },
            jwtPassword,
            { expiresIn: '1h'}
        )

        return res.status(200).json({ token })
    }
    catch (e){
        console.log(e)
    }
}

module.exports ={
    listUserRoles,
    createUser,
    login
}