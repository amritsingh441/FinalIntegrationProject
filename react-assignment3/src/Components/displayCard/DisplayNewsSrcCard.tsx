import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import DeleteNewsSourceService from '../../service/DeleteNewsSourceService';
import DisplayNewsSourceService  from '../../service/DisplayNewsSourceService';
import UpdateNewsSource from '../../Components/updatenewssource/UpdateNewsSource';
const useStyles = makeStyles({
    media: {
      height: '40vh',
    },
  });

const DisplayNewsSrcCard = (props:any) => {  
    const classes = useStyles(); 
    let currentPageName = "AllNewsSource";
    const handleDeleteNewsSrc = (newsSrcId:any) => {
        const deleteOperation = DeleteNewsSourceService(newsSrcId,currentPageName);
        deleteOperation.then(response => {
            if(response['status'] === 200){
                const displayNewsSrcData = DisplayNewsSourceService();
                displayNewsSrcData.then(res => {
                 let newsObjList = [...res];
                props.refreshNewsSourceAfterUpdate(newsObjList);
                })
            }
        })
    }

return <Grid item sm={3} container direction = "row" alignItems="center" justify="space-evenly">
    <Card>
            <CardContent>
                <Typography id = "tHeader4" component="p" variant="body2" color="textSecondary">
                Source Name : {props.nData.newsSourceName}
                </Typography>
                <Typography id = "tHeader5" component="p" variant="body2" color="textSecondary">
                Description : {props.nData.newsSourceDesc}
                </Typography>
                <Typography id = "tHeader3" component="p" variant="body2" color="textSecondary">
                Author : {props.nData.newsSourceCreatedBy}
                </Typography>
                <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={()=>handleDeleteNewsSrc(props.nData.newsSourceId)}>Delete News Source</Button>
                <UpdateNewsSource newsSrcData ={props.nData} refreshNewsSourceAfterUpdate={props.refreshNewsSourceAfterUpdate}/>
             </CardActions>  
            </CardContent>
        </Card>
   </Grid> 
}

export default DisplayNewsSrcCard;