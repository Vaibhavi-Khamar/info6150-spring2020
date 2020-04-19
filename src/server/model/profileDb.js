const pool = require('./pool');


var profileDb = {
  addProfile: (userid, username, name, email, city, about) => {
    return new Promise((resolved, rejected) => {
      const sql = "INSERT INTO `profile`(userid, username, name, email, city, about) VALUES(?, ?, ?, ?, ?, ?)";
      const params = [userid, username, name, email, city, about];
      console.log(params)

      pool.query(sql, params, function(err) {
        if (err) {
          console.log(err);
          resolved(400);
        } else {
          console.log("ADD PROFILE: " + username);
          resolved(200);
        }
      });
    });
  },
  editProfile: (name,email, city, about, username) => {
    return new Promise((resolved, rejected) => {
      const sql = "UPDATE `profile` SET name=?, email=?, city=?, about=? WHERE username=?";
      const params = [name,email, city, about, username];
      console.log(params)

      pool.query(sql, params, function(err) {
        if (err) {
          console.log(err);
          resolved(400);
        } else {
          console.log("EDIT PROFILE: " );
          resolved(200);
        }
      });
    });
  },
  searchProfile: (userid) => {
    return new Promise((resolved, rejected) => {
      const sql = "SELECT * FROM `profile` WHERE `userid` = ? ";
      const params = [userid];

      pool.query(sql, params, function(err, results) {      
        if (err) {
          console.log(err);
          resolved([400, "ERR"]);
        } 
        else if (Object.keys(results).length == 0) {
          resolved([404, "NO DATA"]);
        } else {      
          console.log(results)
          console.log("GET USER PROFILE: " );
          resolved([200, results[0]]);
        }
      });
    });
  }
};
module.exports = profileDb;