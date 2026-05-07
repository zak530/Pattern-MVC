const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/userController');

router.get('/', userController.home);
router.get('/users', userController.scortaUser);
router.post('/users', userController.createUser);
router.post('/users/delete/:id', userController.deleteUser);
router.post('/users/vendi/:id', userController.vendiUser);
router.post('/users/compra/:id', userController.compraUser);
//router.get('/scorta', userController.scortaUser);
module.exports = router;