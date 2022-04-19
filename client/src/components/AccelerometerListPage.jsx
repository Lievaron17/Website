import {
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';

function callApi(acc_id){
  const id = acc_id;
  fetch(`http://localhost:3000/getirt/${id}`, {method: 'GET'})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    alert(data.irt.vehicle_id)
  })

  // how to redirect to another page in react from a function

  //use this reference : https://mocki.io/call-a-rest-api-in-react

}

export default function Irt() {

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
          <h1>Accelerometer</h1>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => callApi('S1111')}
          >
            Accelerometer S1111
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => callApi('2222')}
          >
            Accelerometer S2222
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => callApi('S3333')}
          >
            Accelerometer S3333
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => callApi('S1234')}
          >
            Accelerometer S1234
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => callApi('S1235')}
          >
            Accelerometer S1235
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button 
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => callApi('S1236')}
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
    fontSize: "18px"
  },
}));