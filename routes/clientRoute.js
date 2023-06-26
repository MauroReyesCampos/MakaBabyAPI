const express = require("express");

const router = express.Router();

const {verifyToken} = require("../middlewares/verifyToken");

//importar el userController
const clientController = require("../controllers/clientController");

router.get('/', clientController.getAllClients);

router.post('/create', clientController.createClient);

router.put('/update/:id', verifyToken, clientController.updateClient);

router.delete('/delete/:id', verifyToken, clientController.deleteClient);

// router.get('/:email', userController.getUser);

module.exports = router;