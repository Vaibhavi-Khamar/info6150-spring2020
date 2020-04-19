const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/', async (ctx, next) => {
  ctx.body = {
    title: 'response'
  }
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.use('/user', require('./user'));
router.use('/order', require('./order'));
router.use('/profile', require('./profile'));

module.exports = router;
