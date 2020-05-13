import DashboardNews from '../model/DashboardNews';
import NewsSource from '../model/NewsSource';

const NewsService = () => {
    let url = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b95fa856336437295a0ee3d0a53fd69";
    return fetch(url).then(resp => {
        if(resp.ok){
            return resp.json();
        }else{
            console.log("response is ::"+resp)
            throw new Error("Bad Request")
        }
    }).then(data => {
        let cardList: any = [];
        if(data!=null && data.articles!==undefined){
            Array.prototype.forEach.call(data.articles, (article: any) => {
                console.log("data.article in news service ::"+JSON.stringify(article))
                let newsObj = new DashboardNews(
                    article.title, 
                    article.author,
                    article.urlToImage,
                    article.description,
                    article.source.name
                );
                cardList.push(newsObj)
            })
        }else{
            Array.prototype.forEach.call(data.sources, (sources: any) => {
                // let newsObj = new News(sources.url, sources.name, sources.description);
                //cardList.push(newsObj)
            })
        }
        return cardList;
    }).catch(error => {
        console.log("error in promise is : "+error)
       return Promise.reject("Bad request");
    });
}

export default NewsService;