const transactionModel = require('../models/transactionModel');

const getAllTransaction = async(req,res) => {
    try{
        const transaction = await transactionModel.find({});
        res.status(200).json(transactions);
    } catch(error){
        console.log(error);
        res.status(500).json(error.message);
    }
};
const addTransaction = async(req,res) => {
    try{
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send('Transaction added successfully')
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
};

module.exports ={getAllTransaction: getAllTransaction, addTransaction};