const { check } = require('express-validator');

exports.validationLogin = [
  check('email')
    .isEmail().withMessage('Invalid email')
    .not().isEmpty().withMessage('Email is not empty'),
  check('password')
    .isLength({ min: 6 }).withMessage('Password must have at least 6 characters')
    .not().isEmpty().withMessage('Password is not empty')
];
