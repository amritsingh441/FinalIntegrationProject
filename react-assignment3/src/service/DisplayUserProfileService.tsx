const DisplayUserProfileService =  () => {
    
let usrProfileUrl = 'http://localhost:8091/UserProfileService/api/v1/userprofile/'+localStorage.getItem("UserName");
  return fetch(usrProfileUrl,{
    method:'GET',
    headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
    }, 
}).then(resp => {
    if(resp.ok){
        console.log("resp.ok if Display profile service ::"+JSON.stringify(resp))
        return resp.json();
    }else{
        console.log("resp.ok else Display profile service ::"+JSON.stringify(resp))
        throw new Error("Bad Request")
    }
}).then(data =>{
    console.log("Response in UserprofileService :: "+JSON.stringify(data))
    let userProfObj = {
        "userId" : data.userId,
        "firstName":data.firstName,
        "lastName":data.lastName,
        "contact": data.contact,
        "email":data.email,
    }
    console.log("Response userProfObj in UserprofileService :: "+JSON.stringify(userProfObj))
    return userProfObj;
})

}

export default DisplayUserProfileService;