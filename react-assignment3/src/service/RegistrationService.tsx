import User from '../model/User';


const RegistrationService = async (user:User) => {

   let userRegData = {
    'userId':user.username,
    'password': user.password,
    'cpassword':user.password
   };
    let url = 'http://localhost:8091/AuthenticationService/api/v1/auth/register';
   const respdata =  await fetch(url,{
        method:'POST',
        body:JSON.stringify(userRegData),
        headers : {
            'Content-Type': "application/json",
            'Access-Control-Allow-Headers':"*",
            'Access-Control-Allow-Credentials':"true",
        },
        
    })
    return respdata;
}

export default RegistrationService;