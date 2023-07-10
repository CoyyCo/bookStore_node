const router = require('koa-router')()
import bookInfoController from "../controller/bookInfoController";

router.prefix('/book')
router.get('/getbook', async (ctx, next) => {
    let bookinfo = new bookInfoController()
    let result = await bookinfo.GetBook(ctx.query)
    ctx.body = {
        "code": 200,
        "msg": "success",
        "data": {
            "result": result
        }
    }
})
router.get('/search', async (ctx, next) => {
    let bookinfo = new bookInfoController()
    let result = await bookinfo.SearchBook(ctx.query.searchWord)
    ctx.body = {
        "code": 200,
        "msg": "success",
        "data": {
            "result": result
        }
    }
})
export {router}