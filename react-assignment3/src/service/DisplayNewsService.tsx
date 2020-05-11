import News from '../model/News';

const DisplayNewsService = async () => {
    let url = "http://localhost:8091/NewsService/api/v1/news/"+localStorage.getItem("UserName");
    console.log("Url value in DisplayNewsService :: "+url)
    return await  fetch(url,{
        method:'GET',
        headers : {
            'Content-Type': "application/json",
            'Access-Control-Allow-Headers':"*",
          'Access-Control-Allow-Credentials':"true",
            'Authorization':"Bearer "+localStorage.getItem('token'),
        }
    }).then(resp => {
        console.log("resp json data::: "+JSON.stringify(resp));
        if(resp.status === 200){
            return resp.json();
        }else{
            return resp;
        }
    }).then(data => {
        let cardList: any = [];
        if(data){
        Array.prototype.forEach.call(data,(data:News)  => {
                console.log(" data inside Display news service::: "+JSON.stringify(data));
                let newsObj = new News(
                    data.newsId,
                    data.title, 
                    data.author,
                    data.description,
                    data.urlToImage, 
                    data.newsSource
                );
                console.log("newsObj inside DisplayNewsService::: "+JSON.stringify(newsObj));
                cardList.push(newsObj)        
        })
    }
        return cardList;
    })
}

export default DisplayNewsService;