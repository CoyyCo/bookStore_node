import User from '../model/user';
import userInfoIpml from '../service/userInfoIpml'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import createDB from '../database/mongodb'

class userInfoController implements userInfoIpml {
    async login(username: string, password: string) {
        const mongodb =new  createDB()
        await mongodb.connect()
        try {
            let userCollection = mongodb.getCollection('user')
            const findResult = await userCollection.find({username: username}).toArray()
            if (findResult.length && findResult[0].password == md5(password)) {
                const token = jwt.sign({name: username}, "your-jwt-secret", {expiresIn: 60 * 60 * 4})
                return {
                    flag: true,
                    token: token
                }
            }
            return {
                flag: false,
                token: null
            }
        } finally {
            mongodb.client.close()
        }
    }

    async register(info: User) {
        const mongodb =new  createDB()
        await mongodb.connect()
        try {
            let userCollection = mongodb.getCollection('user')
            const findResult = await userCollection.find({username: info.username}).toArray()
            if(findResult.length){
                return false
            }else{ //没有该用户
                const insertResult = await  userCollection.insertMany([{
                    username:info.username,
                    password:md5(info.password),
                    email:info.email
                }])
                return true
            }
        }finally {
            mongodb.client.close()
        }
    }

}

export default userInfoController