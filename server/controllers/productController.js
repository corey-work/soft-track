const { Product } = require('../sequelize/models')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
    
        if (!products) {
            return res.status(404).json({ message: 'Products not found' });
        }
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
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}


const createProduct = async (req, res) => {
    const 
    { name, price, shortText, 
    longText, category } = req.body

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
        await product.update({ name, price, shortText, longText, category })

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Interal server error', error: error.message });
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