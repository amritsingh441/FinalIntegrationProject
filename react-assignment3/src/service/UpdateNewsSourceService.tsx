import DisplayNewsSourceService from './DisplayNewsSourceService'

const UpdateNewsSourceService = async (props:any) =>{
    console.log("news source id & props in UpdateNewsSourceService :: "+JSON.stringify(props));
    let url = 'http://localhost:8091/NewsSourceService/api/v1/newssource/'+props.newsSourceId;
    console.log("UpdateNewsSourceService  URL ::"+url)
   return await fetch(url,{
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
            alert("News Source updated successfully....")   
        }else{
            alert("News Source Not found...")
        }
        return response;
    })
    //return updateNewsSourceResponse;
}

export default UpdateNewsSourceService;
