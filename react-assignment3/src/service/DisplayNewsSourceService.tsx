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
        return resp.json();
    }).then(data => {
        console.log(" data before then in DisplayNewsSourceService ::: "+JSON.stringify(data));
        let cardList: any = [];
        Array.prototype.forEach.call(data,(data:NewsSource)  => {
            console.log(" data inside DisplayNewsSourceService::: "+JSON.stringify(data));
            if(data!=undefined && JSON.stringify(data)!=JSON.stringify({})){
                let newsSrcObj = new NewsSource(
                    data.newsSourceId, 
                    data.newsSourceName,
                    data.newsSourceDesc,
                    data.newsSourceCreatedBy,
                );
                console.log("newsSrcObj inside DisplayNewsSourceService::: "+JSON.stringify(newsSrcObj));
                cardList.push(newsSrcObj)
            }
            
        })
        return cardList;
    }).catch(error => {
        throw new Error("Something went wrong.....");
        //Promise.reject("Some issue ....")
    });
}

export default DisplayNewsSourceService;