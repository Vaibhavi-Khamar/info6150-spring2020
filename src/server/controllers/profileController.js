const profileDb = require('../model/profileDb')
var profileController = {
  addProfile: (body) => {
    return profileDb.addProfile(body.userid, body.username, body.name, body.email, body.city, body.about);
  },
  searchProfile:(userid) => {
    return profileDb.searchProfile(userid);
  },
  editProfile:(body) => {
    return profileDb.editProfile(body.name, body.email, body.city, body.about, body.username);
  }
};
module.exports = profileController;