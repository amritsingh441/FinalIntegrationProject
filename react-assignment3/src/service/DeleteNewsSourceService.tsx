
const DeleteNewsSourceService = async (props:any,pageName:string) =>{
    console.log("news data in AddNewsSourceService :: "+JSON.stringify(props));
    let url = 'http://localhost:8091/NewsSourceService/api/v1/newssource/'+props;
    console.log("delete news source URL ::"+url)
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
            if(pageName === "AllNewsSource"){
                alert("News Source deleted successfully....")
            }  
        }else{
            if(pageName === "AllNewsSource"){
           alert("News Source not found...")
            } 
        }
        return response;
    })
    //return deleteNewsSourceResponse;

}

export default DeleteNewsSourceService;
