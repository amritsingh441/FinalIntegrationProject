import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import AddNewsService from '../../service/AddNewsService';
import AddNewsSourceService from '../../service/AddNewsSourceService';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';

const useStyles = makeStyles({
    media: {
      height: '40vh',
    },
  });

const DisplayCard = (props:any) => {  
    const classes = useStyles();  

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
                <Typography id = "tHeader3" component="p" variant="body2" color="textSecondary">
                Author : {props.nData.author}
                </Typography>
                <CardActions>
                <Button id="addNewsBtn" size="small" variant="contained" color="primary" onClick ={()=>AddNewsService(props.nData)}>Add News & NewsSource</Button>
        
             </CardActions>  
            </CardContent>
        </Card>
   </Grid> 
}

export default DisplayCard;