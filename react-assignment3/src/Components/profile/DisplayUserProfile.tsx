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
import Container from '@material-ui/core/Container/Container';
import UpdateUserProfile from '../profile/UpdateUserProfile';

const useStyles = makeStyles({
    media: {
      height: '40vh',
    },
  });

const DisplayUserProfile = (props:any) => {  
    const classes = useStyles();  

return <Grid item xs={12} container direction = "row" alignItems="center" justify="space-evenly">
    <Container>
            <CardContent>
            <Typography id = "tHeader1" component="h6" variant="body2" color="textSecondary">
                User Profile Data 
                </Typography>
                <Typography id = "tHeader2" component="p" variant="body2" color="textSecondary">
                User Name : {props.uData.userId} 
                </Typography>
                <Typography id = "tHeader3" component="p" variant="body2" color="textSecondary">
                First Name : {props.uData.firstName}
                </Typography>
                <Typography id = "tHeader4" component="p" variant="body2" color="textSecondary">
                Last Name : {props.uData.lastName}
                </Typography>
                <Typography id = "tHeader5" component="p" variant="body2" color="textSecondary">
                Mobile Number : {props.uData.contact}
                </Typography>
                <Typography id = "tHeader6" component="p" variant="body2" color="textSecondary">
               Email Id : {props.uData.email}
                </Typography>
                <CardActions>
              <UpdateUserProfile userProfileData={props.uData} refreshUserProfileUpdate={props.refreshUserProfileUpdate}/>
             </CardActions>  
            </CardContent>
        </Container>
   </Grid> 
}

export default DisplayUserProfile;