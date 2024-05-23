const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()

router.get('/listuserroles', userController.listUserRoles),
router.post('/createuser', userController.createUser)
router.post('/login', userController.login)

module.exports = router;