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
const ReminderDisplay = (props:any) => {
  const [open,setOpen] = useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const [labelWidth, setLabelWidth] = useState(0);
    return (<div>
    <Button size="small" variant="contained" color="primary" onClick={handleClickOpen}>
        Reminder
      </Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Reminder Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="remId" disabled name="reminderId" value={props.data.reminder.reminderId} label="Reminder Id" variant="outlined"/>
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="remSchedule" disabled name="remSchedule" value={props.data.reminder.schedule} label="Schedule" variant="outlined"/>
        </FormControl>
        <br/> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="closeBtn" variant="contained" onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
          <br/> <br/> 
        </DialogActions>
      </Dialog>
    </div>);
}

export default ReminderDisplay;
