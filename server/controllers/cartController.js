

const { Product } = require('../sequelize/models');

let guestCart = [];

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const existingItem = guestCart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      guestCart.push({
        productId,
        quantity,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }

    res.status(200).json(guestCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCart = async (req, res) => {
  res.status(200).json(guestCart);
};

const updateQuantity = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  guestCart = guestCart.map(item =>
    item.productId == id ? { ...item, quantity } : item
  );

  res.status(200).json(guestCart);
};


const removeItem = (req, res) => {
  const { id } = req.params;

  guestCart = guestCart.filter(item => item.productId != id);

  res.status(200).json(guestCart); // Send updated cart back
};


module.exports = {
  addToCart,
  getCart,
  updateQuantity,
  removeItem,
};
