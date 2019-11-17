import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';


const MasterVolumeCard = props => (
  
  // const useStyles = makeStyles(theme => ({
  //   card: {
  //     minWidth: 275,
  //   },
  //   bullet: {
  //     display: 'inline-block',
  //     margin: '0 2px',
  //     transform: 'scale(0.8)',
  //   },
  //   title: {
  //     fontSize: 14,
  //   },
  //   pos: {
  //     marginBottom: 12,
  //   },
  //   root: {
  //     width: 300,
  //   },
  //   margin: {
  //     height: theme.spacing(3),
  //   },
  // }));

  // const classes = () => this.useStyles;
  
 

    <Card>
      <CardContent>
       <div>
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
          value={props.volume}
          onChange={props.volumeChange}
        />
      </div> 
      </CardContent>
      <CardActions>
    <Button size="small" onClick={() => props.muteVolume()}>{props.mute ? "Unmute" : "Mute"}</Button>
      </CardActions>
    </Card>
);
  

export default MasterVolumeCard;