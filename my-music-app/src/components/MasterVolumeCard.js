import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

export default class MasterVolumeCard {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0
    }
  }
  
  useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
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
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  
  marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  classes = this.useStyles;
  
 // [value, setValue] = React.useState(20);
  
  handleChange = (event, newValue) => {
      this.setValue(newValue);
    };
  
  return (){
    render (
    <Card className={classes.card}>
      <CardContent>
       <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Volume
        </Typography>
        <Slider
          defaultValue={20}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
        />
      </div> 
      </CardContent>
      <CardActions>
        <Button size="small">Mute</Button>
      </CardActions>
    </Card>
    )};
  }