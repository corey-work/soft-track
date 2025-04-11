const express = require('express')
const router = express.Router();
const 
{ getAllProducts, getProduct, createProduct, 
updateProduct, deleteProduct } = require('../controllers/productController')
const { verifyToken, isAdmin } = require('../middleware/authMiddleware')

router.get('/', verifyToken, isAdmin, getAllProducts)
router.get('/:id',verifyToken, isAdmin, getProduct)
router.post('/create',verifyToken, isAdmin, createProduct)
router.put('/update/:id',verifyToken, isAdmin, updateProduct);
router.delete('/delete/:id',verifyToken, isAdmin, deleteProduct);

module.exports = router