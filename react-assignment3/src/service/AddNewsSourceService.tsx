import NewsSource from "../model/NewsSource";

const AddNewsSourceService = async (props:any) =>{
    console.log("news data in AddNewsSourceService :: "+JSON.stringify(props));
    let newsSourceData = {
        "newsSourceId":props.newsId,
        "newsSourceName":props.title,
        "newsSourceDesc":props.description,
        "newsSourceCreatedBy":localStorage.getItem("UserName"),
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
        if (response['status'] == 201) {
            alert("News Source Added successfully ....")
          }else{
              alert("News Source already exists.....")
          }
    })
  

}

export default AddNewsSourceService;
