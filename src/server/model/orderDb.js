// create the connection to database
const pool = require('./pool');

var orderDb = {
  addOrder: (no, userId, data) => {
    return new Promise((resolved, rejected) => {
      const sql = "INSERT INTO `order`(no, user_id, data) VALUES(?, ?, ?)";
      const params = [no, userId, JSON.stringify(data)];
      console.log(params)

      pool.query(sql, params, function(err) {
        if (err) {
          console.log(err);
          resolved(400);
        } else {
          console.log("ADD ORDER: " + no);
          resolved(200);
        }
      });
    });
  },
  searchOrders: (userId) => {
    return new Promise((resolved, rejected) => {
      const sql =
        "SELECT * FROM `order` WHERE `user_id` = ?";
      const params = [userId];

      pool.query(sql, params, function(err, results) {
        if (err) {
          console.log(err);
          resolved(400);
        } 
        //no result
        else if (Object.keys(results).length == 0) {
          resolved(404);
        } else {
          console.log("SEARCH ORDERS OF: " + userId);
          resolved([200, results]);
        }
      });
    });
  }
};
module.exports = orderDb;
