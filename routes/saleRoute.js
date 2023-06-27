const express = require("express");

const router = express.Router();

const {verifyToken} = require("../middlewares/verifyToken");

//importar el Controller
const saleController = require("../controllers/saleController");

router.get('/', saleController.getAllSales);

router.post('/create', saleController.createSale);

router.put('/update/:id', verifyToken, saleController.updateSale);

router.delete('/delete/:id', verifyToken, saleController.deleteSale);

// router.get('/:email', userController.getUser);

module.exports = router;