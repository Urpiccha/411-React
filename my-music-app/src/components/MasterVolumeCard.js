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


export default class MasterVolumeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 20,
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

  classes = () => this.useStyles;
  
  
  handleChange = (value, event) => {
    console.log(value)
      this.setState({volume: event.target.value});
    };

  render (){
    return (
    <Card className={this.classes.card}>
      <CardContent>
       <div className={this.classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Volume
        </Typography>
        <Slider
          defaultValue={20}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={10}
          marks
          min={0}
          max={100}
          //value={this.state.volume}
          onChange={this.slideChange}
        />
      </div> 
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>this.handleChange(0)}>Mute</Button>
      </CardActions>
    </Card>
    )};
  }