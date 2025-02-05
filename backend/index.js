const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const dbConnection  = require('./helpers/db')

const SampleRouter = require('./routes/route')

dotenv.config();

const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api', SampleRouter)

dbConnection();

app.listen(port, () => {
    console.info('Server is running on port ', port)
})
