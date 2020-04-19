const userDb = require('../model/userDb')
var userController = {
  showUser: () => {
    return userDb.dbTest();
  },
  addUser: (body) => {
    return userDb.addUser(body.username, body.email, body.password);
  },
  searchUser:(body) => {
    return userDb.searchUser(body.username, body.password);
  }
};
module.exports = userController;
