import NewsSource from '../model/NewsSource';

const DisplayNewsSourceService = async () => {
    let url = "http://localhost:8091/NewsSourceService/api/v1/newssource/"+localStorage.getItem("UserName");
    console.log("Url value in DisplayNewsSourceService :: "+url)
    return await fetch(url,{
        method:'GET',
        headers : {
            'Content-Type': "application/json",
            'Access-Control-Allow-Headers':"*",
          'Access-Control-Allow-Credentials':"true",
            'Authorization':"Bearer "+localStorage.getItem('token'),
        }
    }).then(resp => {
        console.log("resp json data in DisplayNewsSourceService::: "+JSON.stringify(resp));
        if(resp.status === 200){
            return resp.json();
        }else{
            return resp;
        }
        
    }).then(data => {
        console.log(" data before then in DisplayNewsSourceService ::: "+JSON.stringify(data));
        let cardList: any = [];
        if(data){
        Array.prototype.forEach.call(data,(data:NewsSource)  => {
            console.log(" data inside DisplayNewsSourceService::: "+JSON.stringify(data));
           // if(data!=undefined && JSON.stringify(data)!=JSON.stringify({})){
                let newsSrcObj = new NewsSource(
                    data.newsSourceId, 
                    data.newsSourceName,
                    data.newsSourceDesc,
                    data.newsSourceCreatedBy,
                    data.newsSourceCreationDate,
                );
                console.log("newsSrcObj inside DisplayNewsSourceService::: "+JSON.stringify(newsSrcObj));
                cardList.push(newsSrcObj)
           // }
            
        })
    }
        return cardList;
    })
}

export default DisplayNewsSourceService;