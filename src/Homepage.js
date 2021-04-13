import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import NoteIcon from '@material-ui/icons/Note';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const currencies = [
  {
    value: 'stand',
    label: 'Pen Stand'
  },
  {
    value: 'EUR',
    label:'Solar Cooker'
  },
  {
    value: 'BTC',
    label:'Mini Robot'
  },
  {
    value: 'JPY',
    label:'Photo Frame'
  },
];


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 900,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  heading: {
    margin: 'auto',
    display: 'block',
    color: '#FF1493',
    backgroundColor: '#A0D7D3'
},
bullet: {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
},
title: {
  fontSize: 14,
},
pos: {
  marginBottom: 12,
},
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [checked, setChecked] = React.useState(false);

  const handleChangeTwo = () => {
    setChecked((prev) => !prev);
  };
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Muskan
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Login/Signup " />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home Section" />
        </ListItem>  
        <ListItem button>
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <ListItemText primary="Planning Section" />
        </ListItem>        
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Submission Section" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Report Section" />
        </ListItem>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Grid container spacing={2} className={classes.heading}>
        <h2>"The desire to create is one of the deepest yearnings of the human soul." -- Dieter F. Uchtdorf </h2>
    </Grid>

    <Paper className={classes.paper} >
    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Typography variant="h5" component="h2">
         {bull}{bull}{bull} Notice{bull}Board{bull}{bull}{bull}
        </Typography>
        <br/>
        <Typography variant="body1" component="p" margin={2}>
          Some Mostly Liked Project Videos
         <br /><br/>
         
          <Card className={classes.root}>
      <CardActionArea>


        <CardMedia 
          component="img"
          height="250"
          image="https://i.pinimg.com/originals/34/fc/59/34fc5951c32208952b1cea9d8164bce6.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pen Stand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Built with buttons and IceCream stiks found in homes. Alot of students are liking this project.By Samar Singh
          </Typography>
          <Button size="small" color="primary" href="https://www.youtube.com/watch?v=QiyFy8VStMw">
          See The Video
        </Button>
        </CardContent>
        <br /><br />
        <CardMedia 
          component="img"
          height="250"
          image="https://i.pinimg.com/1200x/0d/aa/18/0daa18862ba6529fec0bd0e4a814d812.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Doll
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Built with buttons and IceCream stiks found in homes. Alot of students are liking this project.By Shikha
          </Typography>
          <Button size="small" color="primary">
          See The Video
        </Button>
        </CardContent>
        <br /><br />
        <CardMedia 
          component="img"
          height="250"
          image="https://i.pinimg.com/1200x/0d/aa/18/0daa18862ba6529fec0bd0e4a814d812.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Doll
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Built with buttons and IceCream stiks found in homes. Alot of students are liking this project.By Rakul
          </Typography>
          <Button size="small" color="primary">
          See The Video
        </Button>
        </CardContent>

      </CardActionArea>
     
    </Card>

        </Typography>
      </CardContent>
    </Card>
    
    </Paper>

    <Grid container spacing={2} className={classes.heading} padding={12}>
        <h2>Choosing a new Project to start? Try Searching Here</h2>
      </Grid>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Please select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your choice"
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        
    <br  />
        <div spacing={2}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChangeTwo} />}
        label="Show Steps to build"
      />
      <div className={classes.container}>
        <Zoom in={checked}>
          <Paper elevation={4} className={classes.paper}>
            
            <Card spacing={2}>
      <CardContent>
        
        <Typography variant="body2" component="p">
          Step 1: Collect Material
        </Typography>
        <Typography>Sticks,Glue,Photo,Pencil</Typography>
      </CardContent>
    </Card>
          </Paper>
        </Zoom>
        <br />
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
              <Card spacing={2}>
      <CardContent>
        
        <Typography variant="body2" component="p">
          Step 2: Mark Labellings
        </Typography>
        <Typography>Use pencil to mark the places to apply glue</Typography>
      </CardContent>
    </Card>
          </Paper>
        </Zoom><br />
        <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
              <Card spacing={2}>
      <CardContent>
        
        <Typography variant="body2" component="p">
          Step 3: Apply Glue
        </Typography>
        <Typography>Carefully apply glue to paste the photo</Typography>
      </CardContent>
    </Card>
          </Paper>
        </Zoom><br />
        <Zoom in={checked} style={{ transitionDelay: checked ? '1500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
              <Card spacing={2}>
      <CardContent>
        
        <Typography variant="body2" component="p">
          Step 4: Put all togethor
        </Typography>
        <Typography>Put all things togethor and project is READY!!</Typography>
      </CardContent>
    </Card>
          </Paper>
        </Zoom>
      </div>
    </div>
    
      </main>
    </div>
  );
}
