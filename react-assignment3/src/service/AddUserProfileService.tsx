import UserProfile from '../model/UserProfile';


const AddUserProfileService = async (userProfile:UserProfile) => {
    let userProfileData = {
        'userId':userProfile.userId,
        'firstName': userProfile.firstName,
        'lastName':userProfile.lastName,
        'contact': userProfile.contact,
        'email':userProfile.email
       };
let usrProfileUrl = 'http://localhost:8091/UserProfileService/api/v1/user';
   return await fetch(usrProfileUrl,{
    method:'POST',
    body:JSON.stringify(userProfileData),
    headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
    }, 
})
}

export default AddUserProfileService;