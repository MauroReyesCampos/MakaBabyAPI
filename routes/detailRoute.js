const express = require("express");

const router = express.Router();

const {verifyToken} = require("../middlewares/verifyToken");

//importar el Controller
const detailController = require("../controllers/detailController");

router.get('/', detailController.getAllDetails);

router.post('/create', detailController.createDetail);

router.put('/update/:id', verifyToken, detailController.updateDetail);

router.delete('/delete/:id', verifyToken, detailController.deleteDetail);

// router.get('/:email', userController.getUser);

module.exports = router;