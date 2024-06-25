const express = require('express');
const { validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const asyncHandler = require('../middlewares/asyncHandler');
const { validationLogin } = require('../validations/userValidation');

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/login', validationLogin, validate, asyncHandler(authController.login));

module.exports = router;
