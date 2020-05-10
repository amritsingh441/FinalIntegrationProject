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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UpdateUserProfile from '../profile/UpdateUserProfile';

const useStyles = makeStyles({
    media: {
      height: '40vh',
    },
    table: {
        minWidth: 650,
      },
  });

const DisplayUserProfile = (props:any) => {  
    const classes = useStyles();  

return <Grid item xs={12} container direction = "row" alignItems="center" justify="space-evenly">
        <Container>
        <Typography id = "tHeader2" component="div" variant="h6" color="textPrimary">
        User Profile Data
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
                <TableRow></TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              <b>User Name : </b>
              </TableCell>
              <TableCell>{props.uData.userId}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell component="th" scope="row">
              <b>First Name : </b>
              </TableCell>
              <TableCell>{props.uData.firstName}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell component="th" scope="row">
              <b>Last Name : </b>
              </TableCell>
              <TableCell>{props.uData.lastName}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell component="th" scope="row">
              <b>Mobile Number : </b>
              </TableCell>
              <TableCell>{props.uData.contact}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell component="th" scope="row">
              <b>Email Id : </b>
              </TableCell>
              <TableCell>{props.uData.email}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="left"> 
            <UpdateUserProfile userProfileData={props.uData} refreshUserProfileUpdate={props.refreshUserProfileUpdate}/>
            </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Container>

   </Grid> 
}

export default DisplayUserProfile;