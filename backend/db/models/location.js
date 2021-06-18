'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
      },
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  }, {});
  Location.associate = function(models) {
    Location.belongsTo(models.Region, {foreignKey : 'region_id'});
    Location.hasMany(models.Inn, {foreignKey : 'location_id'});
  };
  return Location;
};
