import UserProfile from './UserProfile';

class User{
    username : string
    password : string
    cpassword: string
    constructor(username:string,password:string){
        this.username = username;
        this.password = password;
        this.cpassword = password;
    }
}
export default User;