import React, { useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import UpdateNewsSourceService from '../../service/UpdateNewsSourceService';
import UpdateUserProfileService from '../../service/UpdateUserProfileService';
import DisplayUserProfileService from '../../service/DisplayUserProfileService';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    
  }),
);
const UpdateUserProfile = (props:any) => {
  const [open,setOpen] = useState(false);
  const [firstName,setFirstName] = useState(props.userProfileData.firstName);
  const [lastName,setLastName] = useState(props.userProfileData.lastName);
  const [contact,setContact] = useState(props.userProfileData.contact);
  const [email,setEmail] = useState(props.userProfileData.email);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfileDataChange = (event:any)=> {
    if(event.target.name === 'firstName'){
      setFirstName(event.target.value)
    }
    if(event.target.name === 'lastName'){
      setLastName(event.target.value)
    }
    if(event.target.name === 'contact'){
      setContact(event.target.value)
    }
    if(event.target.name === 'email'){
      setEmail(event.target.value)
    }
  }

const handleUpdateUserProfile =(userProfileData:any) => {
  let userUpdatedData = {
    "userId":props.userProfileData.userId,
    "firstName":firstName,
    "lastName":lastName,
    "contact":contact,
    "email":email,
  }
const updateProfileData = UpdateUserProfileService(userUpdatedData);
updateProfileData.then(response => {
  if(response['status'] === 200){
    const displayUsrProfileAfterUpdate = DisplayUserProfileService();
    displayUsrProfileAfterUpdate.then(res => {
      console.log("Response userProfileObject in updateUserProfile :: "+JSON.stringify(res))
     props.refreshUserProfileUpdate(res);
     })
  }
})
handleClose();
}
  const [labelWidth, setLabelWidth] = useState(0);
    return (<div>
    <Button size="small" variant="contained" color="primary" onClick={handleClickOpen}>
        Update User Profile
      </Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Update User Profile Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="userId" disabled name="userId" value={props.userProfileData.userId} label="User Name" variant="outlined"/>
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="firstName" name="firstName" value={firstName} label="First Name" variant="outlined" onChange={handleProfileDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="lastName" name="lastName" value={lastName} label="Last Name" variant="outlined" onChange={handleProfileDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="contact" name="contact" value={contact} label="Mobile Number" variant="outlined" onChange={handleProfileDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="email" name="email" value={email} label="Email Id" variant="outlined"  onChange={handleProfileDataChange}/>
        </FormControl>
        <br/> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="updateProfileBtn" variant="contained" color="primary" onClick={()=>handleUpdateUserProfile(props.userProfileData)} autoFocus>
            Update
          </Button>
          <Button id ="cancelBtn" variant="contained" onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
          <br/> <br/> 
        </DialogActions>
      </Dialog>
    </div>);
}

export default UpdateUserProfile;
