const express = require('express');
const productcontroller = require ('../Controllers/productcontroller');
const router = express.Router();

router.post('/createproduct', productcontroller.createProduct);
router.get('/listproducts', productcontroller.listProducts);

module.exports = router;