// create the connection to database
const pool = require('./pool');

var userDb = {
  dbTest: () => {
    return new Promise((resolved, rejected) => {
      pool.query('SELECT * FROM `user` WHERE `username` = "admin"', function(
        err,
        results,
        fields
      ) {
        console.log("DB: " + results);
        resolved(results);
      });
    });
  },
  addUser: (username, email, password) => {
    return new Promise((resolved, rejected) => {
      // const sql = 'INSERT INTO `user` (`username`, `password`) VALUES (`' + username + '`, `'+ password + '`)';
      const sql = "INSERT INTO user(username, email, password) VALUES(?, ?, ?)";
      const params = [username, email, password];

      pool.query(sql, params, function(err) {
        if (err) {
          console.log(err);
          resolved(403);
        } else {
          console.log("ADD USER: " + username);
          resolved(200);
        }
      });
    });
  },
  searchUser: (username, password) => {
    return new Promise((resolved, rejected) => {
      const sql =
        "SELECT * FROM `user` WHERE `username` = ? AND `password` = ?";
      const params = [username, password];

      pool.query(sql, params, function(err, results) {
        if (err) {
          console.log(err);
          resolved(400);
        } 
        //no result
        else if (Object.keys(results).length == 0) {
          resolved(404);
        } else {
          // console.log(results[0].id)
          console.log("SEARCH USER: " + username);
          resolved([200, results[0].id]);
        }
      });
    });
  }
};
module.exports = userDb;


