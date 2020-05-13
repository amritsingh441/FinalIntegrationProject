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
  const [userNameError,setUserNameError] = useState(false)
  const [userNameErrorText,setUserNameErrorText] = useState('');
  const [passwordError,setPasswordError] = useState(false)
  const [passwordErrorText,setPasswordErrorText] = useState('');
  const [cPasswordError,setCpasswordError] = useState(false)
  const [cPasswordErrorText,setCpasswordErrorText] = useState('');
  
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancelOperation = () => {
    setUserId('')
    setPassword('')
    setCPassword('')
    setFirstName('')
    setLastName('')
    setContact('')
    setEmailId('')
    setUserNameError(false)
    setUserNameErrorText('')
    setPasswordError(false)
    setPasswordErrorText('')
    setCpasswordError(false)
    setCpasswordErrorText('')
    handleClose()
  }

  const handleOnChange = (event:any) => {
    let validationPattern = /^[0-9a-zA-Z]+$/;
   if(event.target.name === "userId"){
    setUserNameError(false)
    setUserNameErrorText('')
     if(event.target.value.match(validationPattern)){
      setUserId(event.target.value)     
     }else{
       setUserId('')
     }
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
    setPasswordError(false)
    setPasswordErrorText('')
    if(event.target.value.match(validationPattern)){
      setPassword(event.target.value)
     }else{
      setPassword('')
     }
  }
  if(event.target.name === "cPassword"){
    setCpasswordError(false)
    setCpasswordErrorText('')
    if(event.target.value.match(validationPattern)){
      setCPassword(event.target.value)
     }else{
      setCPassword('')
     }
  }
}
const registrationBtnAction = () =>{
  if(userId.length>0 && password.length>0 && cPassword.length>0){
    setUserNameError(false)
    setUserNameErrorText('')
    setPasswordError(false)
    setPasswordErrorText('')
    setCpasswordError(false)
    setCpasswordErrorText('')
    handleRegistration();   
  }else{
    if(userId.length === 0 || password.length===0 || cPassword.length===0){
      if(userId.length === 0){
        setUserNameError(true);
        setUserNameErrorText("Please provide alphanumeric User Name value")
      }
      if(password.length===0){
        setPasswordError(true)
        setPasswordErrorText("Please provide alphanumeric Password value")
      }
      if(cPassword.length===0){
        setCpasswordError(true)
        setCpasswordErrorText("Please provide alphanumeric Confirm Password value")
      }
    }
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
        }else{
          alert("User Already Exists...")
          
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
          <TextField id="uId" name="userId" error={userNameError} helperText={userNameErrorText} label="User Name" variant="outlined" onChange={handleOnChange}/>
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
        <TextField id="uPassword" name="password" error={passwordError} helperText={passwordErrorText} type="password" label="Password" variant="outlined" onChange={handleOnChange}/>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="uConfirmPassword"  name="cPassword" error={cPasswordError} helperText={cPasswordErrorText} label="Confirm Password" variant="outlined" onChange={handleOnChange}/>
        </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="cancelBtn" variant="contained"  color="primary" autoFocus onClick={handleCancelOperation}>
            Cancel
          </Button>
          <Button id ="registerBtn" variant="contained"  color="primary" autoFocus onClick={registrationBtnAction}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>);
}

export default Register;