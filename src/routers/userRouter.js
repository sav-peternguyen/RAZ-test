const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const asyncHandler = require('../middlewares/asyncHandler');

const router = express.Router();

router.get('/:id', auth, asyncHandler(userController.getUser));
router.get('/', auth, asyncHandler(userController.getAllUsers));
router.post('/', auth, asyncHandler(userController.createUser));
router.put('/:id', auth, asyncHandler(userController.updateUser));
router.delete('/:id', auth, asyncHandler(userController.deleteUser));

module.exports = router;
