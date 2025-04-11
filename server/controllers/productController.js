const { Product } = require('../sequelize/models')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params

    try {
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ message: 'Product not found'});
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}


const createProduct = async (req, res) => {
    const 
    { name, price, shortText, 
    longText, category } = req.body

    if (!name || !price || !category) {
        return res.status(400).json({ message: 'Missing fields required' })
    }
    try {
        const newProduct = await Product.create({ name, price, shortText, longText, category });
    
        if (!newProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(201).json(newProduct)

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, shortText, longText, category } = req.body;

    try {
        const product = await Product.findByPk(id);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.update({ name, price, shortText, longText, category })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ message: 'Product not found'})
        }

        await product.destroy()
        res.status(200).json({ message: 'Product successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,

}