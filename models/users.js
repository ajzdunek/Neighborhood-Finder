module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("user", {
      Email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      Score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      Saved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        len: [1]
      }
    });
  
    // Post.associate = function(models) {
    //   Post.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Users;
  };