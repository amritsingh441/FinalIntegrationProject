import AddNewsSourceService from '../service/AddNewsSourceService';
import DashboardNews from '../model/DashboardNews';

 const AddNewsService = async (news:DashboardNews) => {
     console.log("news data in AddNewsService :: "+JSON.stringify(news));
    let url = 'http://localhost:8091/NewsService/api/v1/news';
    let newsSourceData = {
        "newsSourceId":news.newsId,
        "newsSourceName":news.title,
        "newsSourceDesc":news.description,
        "newsSourceCreatedBy":localStorage.getItem("UserName"),
    }
    let newsData = {
        "newsId":news.newsId,
        "title": news.title,
        "author":localStorage.getItem("UserName"),
        "description":news.description,
        "urlToImage": news.urlToImage,
        "newsSource":newsSourceData,
       };
   return await fetch(url,{
        method:'POST',
        body:JSON.stringify(newsData),
        headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
        },
    }).then(response => {
        console.log("Response in addNewsService :: "+JSON.stringify(response))
        if (response['status'] == 201) {
            const addNewsSrc = AddNewsSourceService(newsData.newsSource);
            addNewsSrc.then(result => {
                if (result['status'] == 201) {
                    alert("News and NewsSource Added!!!!. Please Check data in respective tabs..")
                }
               
            })
            
          }
    })
   
}
export default AddNewsService;