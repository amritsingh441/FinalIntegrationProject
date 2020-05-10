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
import UpdateNewsService from '../../service/UpdateNewsService';
import DisplayNewsService from '../../service/DisplayNewsService';

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
const UpdateNews = (props:any) => {
    const [open,setOpen] = useState(false);
    const [title,setTitle]=useState(props.newsData.title)
    const [description,setDescription]=useState(props.newsData.description)
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePageUpdate = (pageName : String) => {
    props.updatePage(pageName);
    };
const handleUpdateNews = () =>{
  let updateNewsObj = {
      "newsId":props.newsData.newsId,
      "title": title,
      "author":localStorage.getItem("UserName"),
      "description":description,
      "urlToImage": props.newsData.urlToImage,
      "newsSource":props.newsData.newsSourceData,
  }
    const updateNews = UpdateNewsService(updateNewsObj);
    updateNews.then(response => {
      if(response['status'] === 200){
        console.log("response in UpdateNews component after update call :: "+JSON.stringify(response));
      //--------------------
      const displayNewsData = DisplayNewsService();
       displayNewsData.then(res => {
        let newsObjList = [...res];
       props.refreshNewsAfterUpdate(newsObjList);
       })
      
//--------------------------
      }
      })
    handleClose();
}
const handleNewsDataChange = (event:any) =>{
    if(event.target.name === 'title'){
        setTitle(event.target.value)
    }
    if(event.target.name === 'description'){
        setDescription(event.target.value)
    }
}
  const [labelWidth, setLabelWidth] = useState(0);
    return (<div>
    <Button size="small" variant="contained" onClick={handleClickOpen}>
        Update News
      </Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Update News Data"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="title" name="title" value={title} label="Title" variant="outlined" onChange={handleNewsDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="newsDesc" name="description" value={description} label="Description" variant="outlined" onChange={handleNewsDataChange} />
        </FormControl>
        <br/> 
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="newsAuthor" disabled name="author" value={props.newsData.author} label="Author" variant="outlined" />
        </FormControl>
        <br/> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="updateNewsBtn" variant="contained" onClick={handleUpdateNews} color="primary" autoFocus>
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

export default UpdateNews;
