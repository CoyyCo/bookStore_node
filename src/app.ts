import Koa from 'koa';
import Router from 'koa-router';
import BookInfoController from './controller/bookInfoController'

const app = new Koa();
const requireDirectory = require('require-directory')
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const json = require('koa-json');
const cors = require("koa2-cors");
const jwt = require("jsonwebtoken");
const koajwt = require("koa-jwt");
const SECRET = "your-jwt-secret"; // 秘钥
app.use(logger());
app.use(cors());
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));
// app.use( async (ctx) => {
//     ctx.body =  ctx.request.body
// })
app.use(json());
const path = require('path')
const staticFiles = require('koa-static')
app.use(staticFiles(path.join(__dirname + '/' + '../public')))
// 日志中间件
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date().getTime() - start.getTime()
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
//error-hiddling
app.use((ctx, next) => {

    return next().catch(err => {
        if (err.status == 401) {
            ctx.body = {
                code: "401",
                msg: "token is invaild,please go to login"
            }
            ctx.status = 401
        } else {
            throw err;
        }
    })
})
// koa-jwt 中间件会获取前端请求中的token,进行检验
app.use(
    koajwt({
        secret: SECRET,
        // key: "user", 默认把token解析的内容保存到 'ctx.user' 中
    }).unless({path: ["/login", "/register"]})
);
requireDirectory(module, "./router", {
    extensions: ['ts'],
    visit: router => {
        router = router.router;  //使用esmodule模式导出来的结果需要修改一下
        if (router instanceof Router) {
            app.use(router.routes()).use(router.allowedMethods())
        }
    }
})
app.listen(3000);