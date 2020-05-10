import React, { useState,useEffect,useRef }  from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import RegistrationService from '../../service/RegistrationService';
import User from '../../model/User';
import UserProfile from '../../model/UserProfile';
import AddUserProfileService from '../../service/AddUserProfileService';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    
  }),
);
const Register = (props:any) => {
  const [open,setOpen] = useState(false);
  const [userId, setUserId] =useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] =useState('');
  const [cPassword, setCPassword] = useState('');
  const [errorText,setErrorText] = useState('');

  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOnChange = (event:any) => {
   if(event.target.name === "userId"){
    setUserId(event.target.value)
  }
  if(event.target.name === "firstName"){
    setFirstName(event.target.value)
  }
  if(event.target.name === "lastName"){
    setLastName(event.target.value)
  }
  if(event.target.name === "contact"){
    setContact(event.target.value)
  }
  if(event.target.name === "emailId"){
    setEmailId(event.target.value)
  }
  if(event.target.name === "password"){
    setPassword(event.target.value)
  }
  if(event.target.name === "cPassword"){
    setCPassword(event.target.value)
  }
}

const handleRegistration = () => {
  const user = new User(userId,password);
        let registerAction = RegistrationService(user);
        registerAction.then(response => {
          console.log("response status data in register comp :: "+response["status"])
          if(response["status"] === 201){
            const userProfileObj = new UserProfile(userId,firstName,lastName,contact,emailId)
          console.log("contact data befor service call::"+userProfileObj.contact)
            let userprofileData = AddUserProfileService(userProfileObj);
          userprofileData.then(response =>{
            if(response["status"] === 201){
              alert("User Registration Successful..")
            }else{
              alert("User registration failed...")
            }
          })
        }
        })
        handleClose();      
}
  const handleClose = () => {
    setOpen(false);
  };
  const [labelWidth, setLabelWidth] = useState(0);
    return (<div>
    <Button size="small" variant="contained" onClick={handleClickOpen}>
        Register
      </Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Registration Form"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         <FormControl variant="outlined" className={classes.formControl}>
          <TextField id="uId" name="userId" error={errorText.length === 0 ? false : true} label="User Name" variant="outlined" onChange={handleOnChange}/>
        </FormControl> 
          <FormControl variant="outlined" className={classes.formControl}>
          <TextField id="uFirstName" name="firstName" label="First Name" variant="outlined" onChange={handleOnChange} />
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="uLastName" name="lastName" label="Last Name"variant="outlined" onChange={handleOnChange}/>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="uMobileNumber" name="contact" label="Mobile Number" variant="outlined" onChange={handleOnChange}/>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="uEmailId" name="emailId" type="email" label="Email ID" variant="outlined" onChange={handleOnChange}/>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="uPassword" name="password" type="password" label="Password" variant="outlined" onChange={handleOnChange}/>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="uConfirmPassword"  name="cPassword" label="Confirm Password" variant="outlined" onChange={handleOnChange}/>
        </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="cancelBtn" variant="contained"  color="primary" autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button id ="registerBtn" variant="contained"  color="primary" autoFocus onClick={handleRegistration}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>);
}

export default Register;