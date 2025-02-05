const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                // Regular expression to validate a basic email format
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
            },
            message: props => `${props.value} is not a valid email!`,
        },
    },
})

const SampleModel = mongoose.model('sample', schema)

module.exports = SampleModel;