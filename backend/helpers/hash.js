const bcrypt = require('bcrypt')

const HashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

module.exports = HashPassword