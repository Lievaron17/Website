import {
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useState } from 'react';
import AccelerometerItem from './AccelerometerItem';

export default function Accelerometer() {

  const classes = useStyles();

  const [accelerometerId, setAccelerometerId] = useState();

  return (
    <>
      <AccelerometerItem id={accelerometerId} setId={setAccelerometerId}/>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center"
      >

        <Grid item xs={12}>
          <h1>Accelerometer</h1>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => setAccelerometerId('S1111')}
          >
            Accelerometer S1111
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => setAccelerometerId('S2222')}
          >
            Accelerometer S2222
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => setAccelerometerId('S3333')}
          >
            Accelerometer S3333
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => setAccelerometerId('S4444')}
          >
            Accelerometer S4444
          </Button>
        </Grid>

      </Grid>
    </>
  );
}

// constants
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: '5%',
    alignItems: 'center',
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#5E8ACF",
    padding: "18px 36px",
    fontSize: "18px"
  },
}));