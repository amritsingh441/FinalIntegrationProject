import UserProfile from '../model/UserProfile';


const UpdateUserProfileService = async (userProfile:UserProfile) => {
    let userProfileData = {
        'userId':userProfile.userId,
        'firstName': userProfile.firstName,
        'lastName':userProfile.lastName,
        'contact': userProfile.contact,
        'email':userProfile.email
       };
let usrProfileUrl = 'http://localhost:8091/UserProfileService/api/v1/userprofile/'+localStorage.getItem("UserName");
   return await fetch(usrProfileUrl,{
    method:'PUT',
    body:JSON.stringify(userProfileData),
    headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
    }, 
}).then(response =>{
    if(response['status'] === 200){
        alert("Update user profile success....") 
    }else{
        alert("Update user profile failed....") 
    }
    return response;
})
}

export default UpdateUserProfileService;