import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from './Button';
import yoda from '../images/yoda.png';
import sith from '../images/sith.png';
import jarjarbink from '../images/jarjarbink.png';


console.log(yoda);


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    'margin-top': '15px',
    'padding-left': '20px',
    'padding-right': '20px',


  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
          <img src={yoda} />
          <Button name="Yoda Translator" onClick={() => props.updateName("Test")}/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
          <img src={sith} />
          <Button name="Sith Translator"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
          <img src={jarjarbink}/>
          <Button name="Jar Jar Bink Translator"/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}