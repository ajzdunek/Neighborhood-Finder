module.exports = function(sequelize, DataTypes) {
    var Neighborhoodgeneral = sequelize.define("neighborhood_general", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Score: {
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
  
    return Neighborhoodgeneral;
  };