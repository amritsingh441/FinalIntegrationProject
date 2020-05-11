
class NewsSource {

    newsSourceCreatedBy:String
    newsSourceCreationDate:Date
    newsSourceDesc:String
    newsSourceId:number
    newsSourceName:String

    constructor(newsSourceId:number,newsSourceName:String,newsSourceDesc:String,newsSourceCreatedBy:String,newsSourceCreationDate:Date)
    {
        this.newsSourceId=newsSourceId;
        this.newsSourceName=newsSourceName;
        this.newsSourceDesc=newsSourceDesc;
        this.newsSourceCreatedBy=newsSourceCreatedBy;
        this.newsSourceCreationDate = new Date();
    }
}
export default NewsSource;