const mongoose = require('mongoose')
const transectionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    catagory: {
        type: String,
        required: [true, 'catagory is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, ' description is required']
    },
    date: {
        type: Date,
        required: [true, ' date is required']
    }
}, { timestamps: true })

const transectionModel = mongoose.model('transections', transectionSchema)