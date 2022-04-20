import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  
  function callApi(acc_id){
    const id = acc_id;
    fetch(`http://localhost:3000/getsteer/${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => alert(data.steer.vehicle_id))
  
    // how to redirect to another page in react from a function
  
    //use this reference : https://mocki.io/call-a-rest-api-in-react
  
  }
  
  export default function Steer() {
  
    const classes = useStyles();
  
    return (
      
      <>
        <Grid
          container
          spacing={2}
          className={classes.gridContainer}
          justify="center"
        >
  
          <Grid item xs={12}>
            <h1>Steer Sensor</h1>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1212')}
            >
              Steer Sensor S1212
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1313')}
            >
              Steer Sensor S1313
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1414')}
            >
              Steer Sensor S1414
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1515')}
            >
              Steer Sensor S1515
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1616')}
            >
              Steer Sensor S1616
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1717')}
            >
              Steer Sensor S1717
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
    },
  }));