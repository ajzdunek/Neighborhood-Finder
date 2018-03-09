module.exports = function (sequelize, DataTypes) {
    var Neighborhooddetail = sequelize.define("Neighborhooddetail", {
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
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
        Link: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        FKNeighborhoodsGen: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [5]
            },
        }
    });

    Neighborhooddetail.associate = function(models) {
      Neighborhooddetail.belongsTo(models.Neighborhoodgeneral);
      foreignKey: {
        allowNull: true
      }
    };


    return Neighborhooddetail;
};