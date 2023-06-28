const express = require("express");
const { addTransaction } = require("../controllers/transactionCtrl");


//router object
const router = express.Router();

//routes
//add transaction methodsPOST Method
router.post('/add-transaction', addTransaction);

//router get methods
router.get('/add-transaction', getTransaction);

module.exports = router;
