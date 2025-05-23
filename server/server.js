require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const { sequelize } = require('./sequelize/models')
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173'}));
app.use(morgan('dev'))
const middleware = (err, req, res, next) => {
    if (err) {
        console.error(err.stack)
        res.status(500).json({ message: 'Something went wrong', error: err.message })
    }
    next()
}

app.use(middleware)
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

const connectDb = async () => {
    console.log('Checking database connection...')
    
    try {
        await sequelize.authenticate();
        console.log('Database connection successful')
    } catch (error) {
        console.log('There was an issue connecting to the database', error.message);
        process.exit(1);
    }
}

(async () => {
    console.log('Attempting database connection...')
    await connectDb();
    app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`))
})();