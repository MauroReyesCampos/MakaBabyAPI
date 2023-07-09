const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

const {verifyToken} = require("../middlewares/verifyToken");

//importar el userController
const userController = require("../controllers/userController");

router.get('/', verifyToken, userController.getAllUsers);

router.post('/create', verifyToken, userController.createUser);

router.put('/update/:id', verifyToken, userController.updateUser);

router.delete('/delete/:id', verifyToken, userController.deleteUser);

router.post('/login', authController.authenticateUser);

// router.get('/:email', userController.getUser);

module.exports = router;