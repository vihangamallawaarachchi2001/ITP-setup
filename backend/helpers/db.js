const mongoose = require('mongoose')

 const dbConnection = async () => {
    const url = process.env.MONGODB_URI
    try {
       await mongoose.connect(url)
       if ( mongoose.connection.readyState === 1 ) console.info('DB Connected Successfully')
        else if ( mongoose.connection.readyState === 2 ) console.info('DB is connecting')
    } catch (error) {
        console.error('Error occured file connecting to the database : ', error);
    }
}

module.exports = dbConnection;