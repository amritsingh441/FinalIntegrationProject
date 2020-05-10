import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DisplayNewsSourceService from '../../service/DisplayNewsSourceService';
import DisplayNewsSrcCard from '../../Components/displayCard/DisplayNewsSrcCard';
import News from '../../model/News';
import Grid from '@material-ui/core/Grid';
import NewsSource from '../../model/NewsSource';

const AllNewsSource = () => {
      const [newsSource, setNewsSource] = useState<NewsSource[]>([]);
      const displayAllNewsSource = DisplayNewsSourceService();
      displayAllNewsSource.then(res => {
            let newsSrcObjList = [...res];
            console.log("newsObjList in AllNewsSource component :::"+JSON.stringify(newsSrcObjList));
            if (newsSource.length === 0 && newsSrcObjList!=undefined) {
                  setNewsSource(newsSrcObjList)
             }
            console.log("newsSource data in AllNewsSource component :::"+JSON.stringify(newsSource));
      })
      console.log("newsSource length ::"+newsSource.length)

      const refreshNewsSourceAfterUpdate =(updatedNewsSrcObjList:any) => {
            console.log("news data in refreshNewsSourceAfterUpdate before AllNewsSource Component:::"+JSON.stringify(newsSource));
           // if (news.length === 0) {
            setNewsSource(updatedNewsSrcObjList)
            //}
            console.log("news data in refreshNewsSourceAfterUpdate after AllNewsSource Component:::"+JSON.stringify(newsSource));
          }

      console.log("newsSource data in AllNewsSource Component :::"+JSON.stringify(newsSource));
    
      
          let newsSrcCardsList= newsSource.map((newsSrcData: any) =>
            <DisplayNewsSrcCard key={newsSrcData.newsSourceId} nData={newsSrcData} refreshNewsSourceAfterUpdate={refreshNewsSourceAfterUpdate}></DisplayNewsSrcCard>)   
      
      
      return (
            <Grid container  direction = "row" item sm={12} alignItems="center" justify="space-evenly" style={{marginTop:'16vh'}}>
                      
                        {newsSrcCardsList}
            </Grid>
            )

}
export default AllNewsSource;