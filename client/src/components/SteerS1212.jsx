import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';



// useStyles = control the CSS of the website
// styles
const useStyles = makeStyles(() => ({
  gridContainer: {
    alignItems: 'center',
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  header: {
    color: "#000000",
    display: 'flex',
    fontSize: "35px",
    justifyContent: 'center'
  },
   button: {
    borderRadius: 5,
     backgroundColor: "#0992DF",
     color: "white",
     fontSize: "20px",
     padding: "10px"
   },
  text: {
    color: "white",
    fontSize: "32px"
  },
}));
export default function S1212(){
  const classes = useStyles();
    return(
    <Grid container xs={12} className={classes.container} >

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
         <h1> Steer Sensor S1212 </h1>
      </Grid>
      
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h2> 
          Purpose : Measure the rotation of the bogie  <br/><br/>
          IRT ID : S1212 <br/><br/>
          Vehicle ID: mtr19 <br/><br/>
          Installation Date : 2017-12-19 <br/><br/>
          Callibration Date : 2019-02-10 <br/><br/>
          Status Check : good <br/>
        </h2>
      </Grid>
      
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'right', marginRight: '400px'}}>
        <Button className={classes.button}>
           <a style={{color: "#0992DF"}}href="mailto:irt.enquiries@monash.edu" >
              <div style={{color: 'white'}}> Update</div>
          </a>
        </Button>
      </Grid>
     
    </Grid>
     
     )
  }

