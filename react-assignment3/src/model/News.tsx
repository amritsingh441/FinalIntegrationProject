import NewsSource from './NewsSource';
import Reminder from './Reminder';

class News {
    newsId:number
    title:string
    author: string
    description: string
    urlToImage: string
    newssource:NewsSource
    reminder:Reminder

    constructor( newsId:number,title:string,author: string,description: string,urlToImage: string,newsSource:NewsSource,reminder:Reminder) {
        this.newsId = newsId;
        this.title = title;
        this.author = author;
        this.description = description;
        this.urlToImage = urlToImage;
        this.newssource = newsSource;
        this.reminder = reminder;
    }
}

export default News;