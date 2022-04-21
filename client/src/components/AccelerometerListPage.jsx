import {
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';

import { Route, useHistory } from 'react-router-dom';
import AccelerometerDetail from './AccelerometerDetail';



export default function Irt() {

  const classes = useStyles();
  const history = useHistory();

  return (
    
    <>
   

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
            onClick={() => history.push({pathname: '/accelerometerdetail',
            state: { detail: 'S1111' }})}
          >
            Accelerometer S1111
          </Button>
          
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => history.push({pathname: '/accelerometerdetail',
            state: { detail: 'S2222' }})}
          >
            Accelerometer S2222
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => history.push({pathname: '/accelerometerdetail',
            state: { detail: 'S3333' }})}
          >
            Accelerometer S3333
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => history.push({pathname: '/accelerometerdetail',
            state: { detail: 'S1234' }})}
          >
            Accelerometer S1234
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => history.push({pathname: '/accelerometerdetail',
            state: { detail: 'S1235' }})}
          >
            Accelerometer S1235
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => history.push({pathname: '/accelerometerdetail',
            state: { detail: 'S1236' }})}
          >
             Accelerometer S1236
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
    fontSize: "18px",
    color: "white"
  }
}));