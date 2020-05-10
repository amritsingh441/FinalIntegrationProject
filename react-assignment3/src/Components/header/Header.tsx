import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { white } from 'color-name';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: 'cadetblue',
      position: 'fixed',
      width: '100%'
    },
    buttonCls:{
     
    },
    profileCls:{
     cursor: 'pointer',
     textDecoration: 'underline', 
    }
  }));

const Header = (props:any) => {
  const classes = useStyles();
const buttonShowHide=()=> {
if(props.token){
  return <Grid id = "tHeader2" container  direction = "row" item sm={12} alignItems="center" justify="space-evenly">
          <Button size="small" variant="contained" id="dashBoardBtn" onClick ={() =>handlePageUpdate("Dashboard")}>Dashboard</Button>
          <Button size="small" variant="contained" id="displayAllNewsBtn"  onClick ={() => handlePageUpdate("AllNews")}>News</Button>
          <Button size="small" variant="contained" id="displayAllNewsSrcBtn"  onClick ={() => handlePageUpdate("AllNewsSource")}>News Source</Button>
          <Button size="small" variant="contained" id="logoutBtn"  onClick ={() => handleLogout()}>Logout</Button>   
          <Typography id = "tHeader11" component="div" variant="h6" align="center" className={classes.profileCls} onClick={() => handlePageUpdate("UserProfile")}>
            Welcome {localStorage.getItem("UserName")}
         </Typography>
         
          </Grid>
}
};
const handlePageUpdate = (pageName : String) => {
props.updatePage(pageName);
};
const handleLogout = () => {
  props.handleLogout();
  };
    return (<div className={classes.header} style={{zIndex:1}}>
        <Typography id = "tHeader1" component="div" variant="h4" align="center" gutterBottom> 
        The Telegraph
         {buttonShowHide()}
        </Typography>
    </div>);
}

export default Header;