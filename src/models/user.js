const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(sequelize) {
    super.init({
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]+$/i
        }
      }
    }, {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        }
      }
    });
  }

  static associate(models) {
    this.hasMany(models.Game, { foreignKey: 'userId', as: 'games' });
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

module.exports = User;
