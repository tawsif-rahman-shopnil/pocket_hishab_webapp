const express = require("express");
const { addTransaction, getAllTransaction } = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction method, POST Method
router.post('/add-transaction', addTransaction);

//get transaction method, GET Method
router.get('/add-transaction', getAllTransaction);

module.exports = router;
