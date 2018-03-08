module.exports = function (sequelize, DataTypes) {
    var Neighborhooddetails = sequelize.define("neighborhood_details", {
        Places: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Restaurants: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Apartments: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // Post.associate = function(models) {
    //   Post.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return Neighborhooddetails;
};