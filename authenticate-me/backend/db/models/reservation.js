'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    user_id: DataTypes.INTEGER,
    inn_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {foreignKey: 'user_id'});
    Reservation.belongsTo(models.Inn, {foreignKey: 'inn_id'});
    Reservation.hasOne(models.Review, {foreignKey: 'reservation_id'});
  };
  return Reservation;
};
