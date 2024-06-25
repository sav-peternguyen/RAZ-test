const User = require('../models/user');

const userRepository = {
  async getByField(field, value) {
    return await User.findOne({ where: { [field]: value } });
  },

  async create(userData) {
    return await User.create(userData);
  },

  async update(id, userData) {
    const user = await User.findByPk(id);

    if (user) {
      return await user.update(userData);
    }

    return null;
  },

  async delete(id) {
    const user = await User.findByPk(id);

    if (user) {
      await user.destroy();

      return user;
    }

    return null;
  },

  async getAll() {
    return await User.findAll();
  }
};

module.exports = userRepository;
