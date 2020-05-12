import NewsSource from "../model/NewsSource";

const AddNewsSourceService = async (props:any) =>{
    console.log("news data in AddNewsSourceService :: "+JSON.stringify(props));

     let newsSourceData = {
         "newsSourceId":props.newsSourceId,
         "newsSourceName":props.newsSourceName,
         "newsSourceDesc":props.newsSourceDesc,
        "newsSourceCreatedBy":props.newsSourceCreatedBy,
        "newsSourceCreationDate": new Date(),
     }
     
    let url = 'http://localhost:8091/NewsSourceService/api/v1/newssource';
    return await fetch(url,{
        method:'POST',
        body:JSON.stringify(newsSourceData),
        headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
        },
    }).then(response => {
        console.log("Response in addNewsSourceService :: "+JSON.stringify(response))
        return response;
    })
  

}

export default AddNewsSourceService;
