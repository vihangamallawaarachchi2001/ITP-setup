const bcrypt = require('bcrypt')

const ComparePassword = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
}

module.exports = ComparePassword;