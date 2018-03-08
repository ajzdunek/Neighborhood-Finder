module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("user", {
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Match: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Saved: {
        type: DataTypes.TEXT,
        allowNull: false,
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