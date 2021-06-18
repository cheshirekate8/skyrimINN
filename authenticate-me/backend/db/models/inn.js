'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inn = sequelize.define('Inn', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
      },
    },
    location_id: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Inn.associate = function(models) {
    Inn.belongsTo(models.Location, { foreignKey : 'location_id'});
    Inn.belongsTo(models.Region, { foreignKey : 'region_id'});
    Inn.belongsTo(models.User, {foreignKey:'host_id'});
  };
  return Inn;
};
