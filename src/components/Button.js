import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function ContainedButtons(props) {
  
  const classes = useStyles();

  // console.log(props.name);

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
      {props.name}
      </Button>
    </div>
  );
}