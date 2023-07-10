import userModel from '../model/user';
interface userInfoIpml {
    login(username: string, password: string): Object;
    register(info:userModel): Object
}
export default userInfoIpml;