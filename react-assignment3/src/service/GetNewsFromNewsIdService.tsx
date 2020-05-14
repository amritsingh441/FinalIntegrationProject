

const GetNewsFromNewsIdService = async (newsId:any) => {
    let url = 'http://localhost:8091/NewsService/api/v1/news/'+localStorage.getItem("UserName")+'/'+newsId;
    console.log("UpdateNewsSourceService  URL ::"+url)
   return await fetch(url,{
        method:'GET',
        headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
        },
    }).then(response =>{
        console.log("response inside GetNewsFromNewsIdService :: "+JSON.stringify(response))
        // if(response['status'] === 200){
         
        //     alert("News Source updated successfully....")   
        // }else{
        //     alert("News Source Not found...")
        // }
        console.log("inside response status ::"+response['status'])
        
        return response.json();
    }).then(data => {
        console.log("data inside GetNewsFromNewsIdService :: "+JSON.stringify(data))
        return data;
    })
}

export default GetNewsFromNewsIdService;