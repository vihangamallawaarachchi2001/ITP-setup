const jwt = require('jsonwebtoken')

const GenerateToken = async (id) => {
    return await jwt.sign({_id: id}, process.env.JWT_SECRET, {expiresIn: '1h'})
}

module.exports = GenerateToken;