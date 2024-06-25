const express = require('express');
const gameController = require('../controllers/gameController');
const auth = require('../middlewares/auth');
const asyncHandler = require('../middlewares/asyncHandler');

const router = express.Router();

router.get('/:id', auth, asyncHandler(gameController.getGame));
router.get('/', auth, asyncHandler(gameController.getAllGames));
router.post('/', auth, asyncHandler(gameController.createGame));
router.put('/:id', auth, asyncHandler(gameController.updateGame));
router.delete('/:id', auth, asyncHandler(gameController.deleteGame));

module.exports = router;
