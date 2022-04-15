import {
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';

export default function Accelerometer() {


  const classes = useStyles();

  return (
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
        >
          Accelerometer#1
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
        >
          Accelerometer#2
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
        >
          Accelerometer#3
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
        >
          Accelerometer#4
        </Button>
      </Grid>

    </Grid>
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