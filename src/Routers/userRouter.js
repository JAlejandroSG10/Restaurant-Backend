const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()

router.get('/listuserroles', userController.listUserRole),
router.post('/createuser', userController.createUser)

module.exports = router;