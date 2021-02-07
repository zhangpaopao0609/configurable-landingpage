const Router = require('koa-router');
const router = new Router({ prefix: '/admin' });

router.get("/", async ctx => {
  ctx.body = "admin";
});

module.exports = router.routes();