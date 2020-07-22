import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 445/*275*/,
    display: 'inline-block',
    margin: '8px 12px',
  },
  /*title: {
    fontSize: 14,
  },*/

  pos: {
    marginBottom: 2,
  },
});

const CustomCard =(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h3" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" >
          {props.subtitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.para1? props.para1 : <b>&emsp;</b>}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.para2? props.para2 : <b>&emsp;</b>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;