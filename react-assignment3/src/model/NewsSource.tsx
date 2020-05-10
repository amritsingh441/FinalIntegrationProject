
class NewsSource {

    newsSourceId:number
    newsSourceName:String
    newsSourceDesc:String
    newsSourceCreatedBy:String

    constructor(newsSourceId:number,newsSourceName:String,newsSourceDesc:String,newsSourceCreatedBy:String)
    {
        this.newsSourceId=newsSourceId;
        this.newsSourceName=newsSourceName;
        this.newsSourceDesc=newsSourceDesc;
        this.newsSourceCreatedBy=newsSourceCreatedBy;
    }
}
export default NewsSource;