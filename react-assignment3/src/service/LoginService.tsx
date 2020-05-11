import User from '../model/User';

export const LoginService = async (user:User) => {
    let userLoginData = {
        "userId":user.username,
        "password": user.password
       }
    let url = 'http://localhost:8091/AuthenticationService/api/v1/auth/login';
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': "application/json",
            'Access-Control-Allow-Headers':"*",
            'Access-Control-Allow-Credentials':"true"
        },
        body:JSON.stringify(userLoginData)
    })
    if(response.ok){
        return response.json();
    }else{
        return response;
    }
   
}
