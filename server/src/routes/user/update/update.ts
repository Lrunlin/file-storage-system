import Router from "@koa/router";
import DB from "@/db";
import auth from "@/common/middleware/auth";

let router = new Router();
router.put("/user", auth(0), async (ctx) => {
  await DB.User.update(ctx.request.body, { where: { id: ctx.id } })
    .then(() => {
      ctx.body = { success: true, message: "修改成功" };
    })
    .catch((err) => {
      ctx.status = 500;
      ctx.body = { success: false, message: "更新错误" };
      console.log(err);
    });
});
export default router;
