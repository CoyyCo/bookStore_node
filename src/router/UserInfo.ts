const router = require('koa-router')()
import userInfoController from '../controller/userInfoController'

router.post('/login', async (ctx, next) => {
    let req = JSON.parse(ctx.request.body);
    let userInfo = new userInfoController();
    let data = await userInfo.login(req.username, req.password)
    if (data.flag) {
        ctx.body = {
            "code": 200,
            "msg": "success",
            "data": {
                "token": data.token
            }
        }
    } else {
        ctx.body = {
            "code": 400,
            "msg": "用户名或密码错误"
        }
    }
})
/*
* username
* email
* password
* */
router.post('/register', async (ctx, next) => {
    let req = ctx.request.body;
    let userInfo = new userInfoController();
    let data = await userInfo.register(JSON.parse(req));
    if(data){
        ctx.body = {
            "code": 200,
            "msg": "success",
        }
    }else{
        ctx.body = {
            "code": 400,
            "msg": "用户名已存在"
        }
    }
})
// module.exports = router
export {
    router
}