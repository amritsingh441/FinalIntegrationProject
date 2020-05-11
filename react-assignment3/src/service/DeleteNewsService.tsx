import DeleteNewsSourceService from './DeleteNewsSourceService';

const DeleteNewsService = async (props:any,pageName:string) =>{
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
            const deleteNewsSrc = DeleteNewsSourceService(props,pageName);
            deleteNewsSrc.then(response => {
                if(response['status'] === 200){
                        alert("News and News Source deleted successfully....")
                }else{
                    alert("News deleted but News Source not found....")
                }
            })
        }else{
            alert("News not found...")
        }
        return response;
    })
   // return deleteNewsResponse;
}

export default DeleteNewsService;
