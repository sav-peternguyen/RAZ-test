const userService = require('../services/userService');
const { success } = require('../utils/response');

const authController = {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    const { user, token } = await userService.login(email, password);

    return success(res, { user, token });
	}
};

module.exports = authController;
