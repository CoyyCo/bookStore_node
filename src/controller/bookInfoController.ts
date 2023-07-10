import BookInfoIpml from "../service/bookInfoIpml";
import createDB from "../database/mongodb";

class BookInfoController implements BookInfoIpml {
    // @ts-ignore
    async GetBook(...args): Promise<Array<any>> {
        if (!('hot' in arguments[0])) {
            // @ts-ignore
            return await this.GetHotBook.apply(null, arguments)
        } else if (('hot' in arguments[0])) {
            // @ts-ignore
            return await this.GetTypeBook.apply(null, arguments)
        }

    }

    async GetHotBook(): Promise<Array<any>> {
        // @ts-ignore
        const {type, start, len} = arguments[0]
        const mongodb = new createDB()
        await mongodb.connect()
        try {
            let bookCollection = mongodb.getCollection('bookinfo') //连接集合
            if (type == 'hot') {  //热门书籍
                let findResult = await bookCollection.find().sort({readAmount: 1}).limit(Number(len)).skip(Number(start)).toArray()
                return findResult
            }
            return []
        } finally {
            mongodb.client.close()
        }
        return []
    }

    async GetTypeBook(): Promise<Array<any>> {
        // console.log(arguments)
        const {type, hot, start, len} = arguments[0]
        const mongodb = new createDB()
        await mongodb.connect()
        try {
            let bookCollection = mongodb.getCollection('bookinfo') //连接集合
            let findResult = []
            if (Number(hot)) { //按热度排序
                findResult = await bookCollection.find({category: type}).sort({readAmount: 1}).limit(Number(len)).skip(Number(start)).toArray()
            } else { //按最近更新排序
                findResult = await bookCollection.find({category: type}).limit(Number(len)).skip(Number(start)).toArray()
            }
            return findResult
        } finally {
            mongodb.client.close()
        }
        return []
    }


    GetBookDetail(articleID: number): Object {
        return {};
    }

    // @ts-ignore
    async SearchBook(searchWord: string): Promise<Array<object>> {
        const mongodb = new createDB()
        await mongodb.connect()
        try {
            let bookCollection = mongodb.getCollection('bookinfo') //连接集合
            await bookCollection.createIndex({"bookname": "text", "auther": "text", "Summary": "text"})//text索引，一个表只能有一个
            //使用text索引进行查询，并按照相似度排序
            let result = await bookCollection.find({$text: {$search: searchWord}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}}).toArray()
            console.log(result)
            return result;
        } finally {
            mongodb.client.close()
        }
        return []
    }

}

export default BookInfoController;