import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
      
    height: 150,
    width:354
  },
});

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
          <Typography align="left" gutterBottom variant="h5" component="h2">
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
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}