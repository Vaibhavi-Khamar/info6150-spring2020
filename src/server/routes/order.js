const router = require("koa-router")();
const orderController = require("../controllers/orderController");

router.post("/", async (ctx, next) => {
  ctx.status = await orderController.addOrder(ctx.request.body);
  ctx.body = "success"
});
router.get("/", async (ctx, next) => {
  var data = await orderController.searchOrders(ctx.request.query.userId);
  ctx.status = data[0];
  ctx.body = data[1];
});

module.exports = router.routes();
