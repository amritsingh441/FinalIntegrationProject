import NewsSource from './NewsSource';

class News {
    newsId:number
    title:string
    author: string
    description: string
    urlToImage: string
    newsSource:NewsSource

    constructor( newsId:number,title:string,author: string,description: string,urlToImage: string,newsSource:NewsSource) {
        this.newsId = newsId;
        this.title = title;
        this.author = author;
        this.description = description;
        this.urlToImage = urlToImage;
        this.newsSource = newsSource;
        
    }
}

export default News;