import React from 'react';
import { makeStyles,createMuiTheme , MuiThemeProvider, } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-scroll';
import { blueGrey, blue } from 'material-ui/colors'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
      
    height: 150,
    width:354
  },
});

const redTheme = createMuiTheme({ palette: { primary: blueGrey } })

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          // style={{marginLeft:"85px"}}
          image={props.Image}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography color="primary" align="left" gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography align="left" style={{textAlign:"left!important"}} variant="body2" color="textSecondary" component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <MuiThemeProvider theme={redTheme}>
        <Button variant="contained" href={props.href} size="small" color="primary">
       Learn More
        </Button>
        </MuiThemeProvider>
      </CardActions>
    </Card>
  );
}