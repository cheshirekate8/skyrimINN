'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    inn_id: DataTypes.INTEGER,
    reservation_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'user_id'});
    Review.belongsTo(models.Inn, {foreignKey: 'inn_id'});
    Review.belongsTo(models.Reservation, {foreignKey: 'reservation_id'});
  };
  return Review;
};
