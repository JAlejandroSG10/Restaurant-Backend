const express = require('express');
const departmentcontroller = require('../Controllers/departmentcontroller');
const router = express.Router();

router.get('/listdepartments', departmentcontroller.listDepartments);

module.exports = router;