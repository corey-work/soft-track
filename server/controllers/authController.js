const { User } = require('../sequelize/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } })
        if (existingUser) return res.status(400).json({ message: 'This email is already in use' })
        
        const user = await User.create({ name, email, password, role });
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
       res.status(500).json({ message: 'Internal server error', error: error.message }) 
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' })
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, 
            { expiresIn: '1d'},
        );
        res.status(200).json({ token, user: { id: user.id, name: user.name, role: user.role }})
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

module.exports = { register, login };