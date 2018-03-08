module.exports = function(sequelize, DataTypes) {
    var Neighborhoodgeneral = sequelize.define("neighborhood_general", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Image: {
        type: DataTypes.TEXT,
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
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      Walkscore: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Walkscore_bike: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Walkscore_transit: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Walkscore_walk: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Restaurant_desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      Attraction_desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    //   Neighborhoodgeneral.associate = function(models) {
    //   Neighborhoodgeneral.hasMany(models.Neighborhooddetail, {
    //   });
    // };
  
    return Neighborhoodgeneral;
  };
