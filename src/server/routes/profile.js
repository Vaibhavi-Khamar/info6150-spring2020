const router = require("koa-router")();
const profileController = require("../controllers/profileController");

router.get("/", async (ctx, next) => {
  //ctx.body = profileController.searchProfile(ctx.request.query.userid);
  console.log(ctx.request.query.userid)
  var data = await profileController.searchProfile(ctx.request.query.userid);
  ctx.status = data[0]
  ctx.body = data[1]
});

router.post("/", async (ctx, next) => {
  ctx.status = await profileController.addProfile(ctx.request.body);
});

router.put("/", async (ctx, next) => {
  ctx.status = await profileController.editProfile(ctx.request.body);
});

module.exports = router.routes();
