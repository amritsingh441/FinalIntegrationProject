
const DeleteNewsService = async (props:any) =>{
    console.log("news data in DeleteNewsService :: "+props);
    let url = 'http://localhost:8091/NewsService/api/v1/news/'+localStorage.getItem("UserName")+'/'+props;
    console.log("delete news URL ::"+url)
    return await fetch(url,{
        method:'DELETE',
        headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
        },
    }).then(response =>{
        if(response['status'] === 200){
           alert("News deleted successfully....")
        }else{
            alert("News not found...")
        }
        return response;
    })
   // return deleteNewsResponse;
}

export default DeleteNewsService;
