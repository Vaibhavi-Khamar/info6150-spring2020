const orderDb = require('../model/orderDb')
var orderController = {
  addOrder: (body) => {
    return orderDb.addOrder(body.no, body.userId, body.data);
  },
  searchOrders:(userId) => {
    return orderDb.searchOrders(userId);
  }
};
module.exports = orderController;
