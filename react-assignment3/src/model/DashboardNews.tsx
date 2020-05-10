
class DashboardNews {
    newsId:number
    title:string
    author: string
    urlToImage: string
    description: string

    constructor(title:string,author: string,urlToImage: string,description: string) {
        this.newsId = Math.floor(Math.random()*999)+1000;
        this.title = title;
        this.author = author;
        this.urlToImage = urlToImage;
        this.description = description;
        
    }
}

export default DashboardNews;