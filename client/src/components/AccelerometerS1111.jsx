import React, {useEffect,useState} from 'react'
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


function Call_api(){

  const classes = useStyles();
  const [data,setData] = useState(null)

  const id = 'S1111';
  useEffect(()=>{
    const url = `http://localhost:3000/getirt/${id}`;
    fetch(url).then(resp=>resp.json())
    .then(resp=>setData(resp))
  },[])

  
  if (data){
    return(



    <Grid container xs={12} className={classes.container} >

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
         <h1> Accelerometer S1111 </h1>
      </Grid>
      
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h2> 
          Purpose : Measure the vibration / shock through the wheels <br/><br/>
          IRT ID : S1111 <br/><br/>
          Vehicle ID: mtr01 <br/><br/>
          Installation Date : 2019-06-29 <br/><br/>
          Callibration Date : 2020-10-16 <br/><br/>
          Status Check : goood <br/>
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
  
}

export default Call_api;