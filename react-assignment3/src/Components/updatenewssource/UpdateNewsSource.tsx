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
import DisplayNewsSourceService from '../../service/DisplayNewsSourceService';

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
const UpdateNewsSource = (props:any) => {
    const [open,setOpen] = useState(false);
    const [newsSrcName,setNewsSrcName]=useState(props.newsSrcData.newsSourceName);
    const [newsSrcDesc,setNewsSrcDesc]=useState(props.newsSrcData.newsSourceDesc);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleUpdateNewsSource = () =>{

  let updateNewsSourceObj = {
      "newsSourceId":props.newsSrcData.newsSourceId,
      "newsSourceName":newsSrcName,
      "newsSourceDesc":newsSrcDesc,
      "newsSourceCreatedBy":props.newsSrcData.newsSourceCreatedBy
  }
    const updateNewsSource = UpdateNewsSourceService(updateNewsSourceObj);
    updateNewsSource.then(response => {
       console.log("response in UpdateNews component after update call :: "+JSON.stringify(response));
    if(response['status'] === 200){
      const displayNewsSrcData = DisplayNewsSourceService();
      displayNewsSrcData.then(res => {
       let newsObjList = [...res];
      props.refreshNewsSourceAfterUpdate(newsObjList);
      })
    }
      })
    handleClose();
}
const handleNewsSourceDataChange = (event:any) =>{
    if(event.target.name === 'newsSourceName'){
      setNewsSrcName(event.target.value)
    }
    if(event.target.name === 'newsSourceDesc'){
      setNewsSrcDesc(event.target.value)
    }
}
  const [labelWidth, setLabelWidth] = useState(0);
    return (<div>
    <Button size="small" variant="contained" onClick={handleClickOpen}>
        Update News Source
      </Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Update News Source Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="title" name="newsSourceName" value={newsSrcName} label="News Source Name" variant="outlined" onChange={handleNewsSourceDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="newsDesc" name="newsSourceDesc" value={newsSrcDesc} label="News Source Description" variant="outlined" onChange={handleNewsSourceDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="newsAuthor" disabled name="author" value={props.newsSrcData.newsSourceCreatedBy} label="Author" variant="outlined" />
        </FormControl>
        <br/> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="updateNewsBtn" variant="contained" onClick={handleUpdateNewsSource} color="primary" autoFocus>
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

export default UpdateNewsSource;
