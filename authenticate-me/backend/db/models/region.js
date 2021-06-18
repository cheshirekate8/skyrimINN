'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      },
      unique: true,
    }
  }, {});
  Region.associate = function (models) {
    Region.hasMany(models.Location, { foreignKey : 'region_id'});
    Region.hasMany(models.Inn, { foreignKey : 'region_id'});
  };
  return Region;
};
