import React, {Component} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
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





class SS extends Component{
    render() {
 
  return (
    <div  >


<Grid container spacing={2} >
        <h2>Submit Your Project for Review</h2>
    </Grid>
<Paper  >
        <Grid container spacing={2}>
        <input
        accept="video/*"
       
        id="contained-button-file"
        multiple
        type="file"
      />
        <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Project Video
        </Button>
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



    <Grid container spacing={2} >
        <h2>Projects to Review and Comment</h2>
    </Grid>
      <Paper  >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img alt="complex" src="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg" />
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
              <NoteIcon />
                </IconButton>
            </Grid>
      <Dialog aria-labelledby="form-dialog-title">
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
          <Button color="primary">
            Cancel
          </Button>
          <Button color="primary">
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
<Paper  >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img alt="complex" src="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg" />
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
        <NoteIcon />
      </IconButton>
      </Grid>
      <Dialog aria-labelledby="form-dialog-title">
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
          <Button color="primary">
            Cancel
          </Button>
          <Button color="primary">
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
      <Paper  >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img  alt="complex" src="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg" />
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
        <NoteIcon/>
      </IconButton>
      </Grid>
      <Dialog aria-labelledby="form-dialog-title">
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
          <Button color="primary">
            Cancel
          </Button>
          <Button color="primary">
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
  };
}

export default SS;