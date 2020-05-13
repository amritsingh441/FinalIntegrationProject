import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NewsService from '../../service/NewsService';
import DisplayCard from '../../Components/displayCard/DisplayCard';
import DashboardNews from '../../model/DashboardNews';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
      const [news, setNews] = useState<DashboardNews[]>([]);
      const newsData = NewsService();
      newsData.then(data => { 
            return data }).then(res => {
            let newsObjList = [...res];
            if (news.length === 0) {
                  setNews(newsObjList)
            }
      })
      let newsCardsList = news.map((newsData: DashboardNews) =>
            <DisplayCard key={newsData.urlToImage} nData={newsData}></DisplayCard>)
      return (<Grid container  direction = "row" item sm={12} alignItems="center" justify="space-evenly" style={{marginTop:'16vh'}}>
                        {newsCardsList}
            </Grid>)

}
export default Dashboard;