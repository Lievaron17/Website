import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  
  function callApi(acc_id){
    const id = acc_id;
    fetch(`http://localhost:3000/getspring/${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => alert(data.spring.vehicle_id))
  
    // how to redirect to another page in react from a function
  
    //use this reference : https://mocki.io/call-a-rest-api-in-react
  
  }
  
  export default function Spring() {
  
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
            <h1>Instrumented Suspension Spring</h1>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1121')}
            >
              Instrumented Suspension Spring S1121
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1122')}
            >
              Instrumented Suspension Spring S1122
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1123')}
            >
              Instrumented Suspension Spring S1123
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1124')}
            >
              Instrumented Suspension Spring S1124
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1125')}
            >
              Instrumented Suspension Spring S1125
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1126')}
            >
              Instrumented Suspension Spring S1126
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