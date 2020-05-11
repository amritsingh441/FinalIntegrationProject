import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import AddNewsService from '../../service/AddNewsService';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import DeleteNewsService from '../../service/DeleteNewsService';
import DisplayNewsService from '../../service/DisplayNewsService';
import UpdateNews from '../updatenews/UpdateNews';

const useStyles = makeStyles({
    media: {
      height: '40vh',
    },
  });

const DisplayNewsCard = (props:any) => {  
    const classes = useStyles(); 
    let currentPageName = "AllNews";
    console.log("props data in DisplayNewsCard ::: "+JSON.stringify(props.nData))
    const handleDeleteNews = (newsId:any) => {
        const deleteOperation = DeleteNewsService(newsId,currentPageName);
        deleteOperation.then(response => {
            if(response['status'] === 200){
                const displayNewsData = DisplayNewsService();
                displayNewsData.then(res => {
                 let newsObjList = [...res];
                props.refreshNewsAfterUpdate(newsObjList);
                })
            }
        })
    }

return <Grid item sm={3} container direction = "row" alignItems="center" justify="space-evenly">
    <Card>
            <CardContent>
            <CardMedia className={classes.media} image={props.nData.urlToImage} id="imageUrl"></CardMedia>
                <Typography id = "tHeader2" component="p" variant="body2" color="textSecondary">
                Title : {props.nData.title} 
                </Typography>
                <Typography id = "tHeader3" component="p" variant="body2" color="textSecondary">
                Description : {props.nData.description} 
                </Typography>
                <Typography id = "tHeader4" component="p" variant="body2" color="textSecondary">
                Author : {props.nData.author}
                </Typography>
                <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={()=>handleDeleteNews(props.nData.newsId)}>Delete News</Button>
               <UpdateNews newsData={props.nData} refreshNewsAfterUpdate={props.refreshNewsAfterUpdate}/>
             </CardActions>  
            </CardContent>
        </Card>
   </Grid> 
}

export default DisplayNewsCard;