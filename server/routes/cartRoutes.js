const express = require('express')
const router = express.Router();
const { addToCart,
    getCart,
    updateQuantity,
    removeItem, } = require('../controllers/cartController');

router.post('/', addToCart);
router.get('/', getCart);
router.put('/:id', updateQuantity);
router.delete('/:id', removeItem);

module.exports = router;