const express = require('express')
const router = express.Router();
const 
{ getAllProducts, getProduct, createProduct, 
updateProduct, deleteProduct } = require('../controllers/productController')
const { verifyToken, isAdmin } = require('../middleware/authMiddleware')

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/create', createProduct)
router.put('/update/:id',verifyToken, isAdmin, updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router