require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./sequelize/models')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

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