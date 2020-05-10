class UserProfile{
    userId: string
    firstName: string
    lastName: string
    contact: string
    email: string
    constructor(userId:string,firstName:string,lastName:string,contact:string,email:string){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
    }
}
export default UserProfile;