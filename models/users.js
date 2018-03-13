module.exports = function(sequelize, Sequelize) {
    var user = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          len: [5]
        }
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      Saved: {
        type: Sequelize.STRING,
        allowNull: true,
        len: [1]
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false
      }
    });
  
    return user;
  };