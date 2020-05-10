import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DisplayNewsService from '../../service/DisplayNewsService';
import DisplayNewsCard from '../../Components/displayCard/DisplayNewsCard';
import News from '../../model/News';
import Grid from '@material-ui/core/Grid';

const AllNews = (props:any) => {
      const [news, setNews] = useState<News[]>([]);
      const displayNewsData = DisplayNewsService();
      displayNewsData.then(res => {
            let newsObjList = [...res];
            console.log("newsObjList data in AllNews Component :::"+newsObjList);
            if (news.length === 0) {
                  setNews(newsObjList)
            }
      })
      const refreshNewsAfterUpdate =(updatedNewsObjList:any) => {
            console.log("news data in refreshNewsAfterUpdate before AllNews Component:::"+JSON.stringify(news));
           // if (news.length === 0) {
             setNews(updatedNewsObjList)
            //}
            console.log("news data in refreshNewsAfterUpdate after AllNews Component:::"+JSON.stringify(news));
          }

      console.log("news data in AllNews Component:::"+JSON.stringify(news));
       let newsCardsList = news.map((newsData: News) =>
            <DisplayNewsCard key={newsData.urlToImage} nData={newsData} refreshNewsAfterUpdate={refreshNewsAfterUpdate}></DisplayNewsCard>)
  
      return (
            <Grid container  direction = "row" item sm={12} alignItems="center" justify="space-evenly" style={{marginTop:'16vh'}}>
                        {newsCardsList}
            </Grid>
            )

}
export default AllNews;