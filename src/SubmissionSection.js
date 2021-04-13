import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import NoteIcon from '@material-ui/icons/Note';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 900,
  
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  heading: {
      margin: 'auto',
      display: 'block',
      color: '#FF1493',
      backgroundColor: '#A0D7D3'
  },
  
  
  input: {
    display: 'none',
  },
}));
 

export default function ComplexGrid({setCount}) {
  
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };   

  
  return (
     
    <div className={classes.root} >
  

<Grid container spacing={2} className={classes.heading}>
        <h2>Submit Your Project for Review</h2>
    </Grid>
<Paper className={classes.paper} >
        <Grid container spacing={2}>
        <input
        accept="video/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
        <label htmlFor="contained-button-file">
        
        <Button variant="contained" color="primary" component="span" >
          Choose Project Video
        </Button><br /><br />
        <Button color="primary" variant="contained" onClick={() => setCount(prevCount => prevCount + 1)}>Click to Submit</Button>
      </label>
     
      <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 Choose and Upload your project video and get amazing Reviews
                </Typography>
                
              </Grid>
        </Grid>
        </Grid>
        
      </Paper>



    <Grid container spacing={2} className={classes.heading}>
        <h2>Projects to Review and Comment</h2>
    </Grid>
      <Paper className={classes.paper} >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Pen stand
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Saket Sharma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Class 5
                </Typography>
              </Grid>
              <Grid item>
              <IconButton aria-label="like" color="primary">
             <StarIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
              <NoteIcon onClick={handleClickOpen}/>
                </IconButton>
            </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your Reviews</DialogTitle>
        <DialogContent>
          <DialogContentText>
        Help and Appreciate your friend by reviewing his/her project
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="review"
            label="review"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
              
            </Grid>
            <Grid item>
            <Button variant="contained" color="primary" disableElevation>
      See More Such Videos
    </Button>
            </Grid>
          </Grid>
        </Grid>

        
      </Paper>
<br></br>
<Paper className={classes.paper} >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Pen stand
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Saket Sharma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Class 5
                </Typography>
              </Grid>
              <Grid item>
              <IconButton aria-label="like" color="primary">
        <StarIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <NoteIcon onClick={handleClickOpen}/>
      </IconButton>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your Reviews</DialogTitle>
        <DialogContent>
          <DialogContentText>
        Help and Appreciate your friend by reviewing his/her project
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="review"
            label="review"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
              
            </Grid>
            <Grid item>
            <Button variant="contained" color="primary" disableElevation>
      See More Such Videos
    </Button>
            </Grid>
          </Grid>
        </Grid>

        
      </Paper>
<br></br>
      <Paper className={classes.paper} >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Pen stand
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Saket Sharma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Class 5
                </Typography>
              </Grid>
              <Grid item>
              <IconButton aria-label="like" color="primary">
        <StarIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <NoteIcon onClick={handleClickOpen}/>
      </IconButton>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your Reviews</DialogTitle>
        <DialogContent>
          <DialogContentText>
        Help and Appreciate your friend by reviewing his/her project
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="review"
            label="review"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
              
            </Grid>
            <Grid item>
            <Button variant="contained" color="primary" disableElevation>
      See More Such Videos
    </Button>
            </Grid>
          </Grid>
        </Grid>

        
      </Paper>
    </div>
  );
  }
