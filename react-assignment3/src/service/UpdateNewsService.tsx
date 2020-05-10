import DisplayNewsService from './DisplayNewsService';

const UpdateNewsService = async (props:any) =>{
    console.log("news id & props in UpdateNewsService :: "+JSON.stringify(props));
    let url = 'http://localhost:8091/NewsService/api/v1/news/'+localStorage.getItem("UserName")+'/'+props.newsId;
    console.log("UpdateNewsService news URL ::"+url)
    return  await fetch(url,{
        method:'PUT',
        body:JSON.stringify(props),
        headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
        },
    }).then(response =>{
        if(response['status'] === 200){
            alert("News updated successfully...")
          
        }else{
           alert("News not found...")
        }
        return response;
    })
    //return updateNewsResponse;
}

export default UpdateNewsService;
