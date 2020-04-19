const router = require("koa-router")();
const userController = require("../controllers/userController");

// router.get("/", async (ctx, next) => {
//   ctx.body = await userController.showUser();
// });

router.post("/signIn", async (ctx, next) => {
  // ctx.status = await userController.searchUser(ctx.request.body);
  var data = await userController.searchUser(ctx.request.body);
  ctx.status = data[0]
  ctx.body = {"id": data[1]}
});

router.post("/signUp", async (ctx, next) => {
  // let result = await userController.addUser(ctx.request.body).catch(err => {
  //   console.log("WTF!");
  //   ctx.status = 400;
  // });
  // if(result) {
  //   ctx.body = result;
  // }
  ctx.status = await userController.addUser(ctx.request.body);
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router.routes();
