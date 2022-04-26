import React, {useEffect,useState} from 'react'
import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  import { useHistory } from 'react-router-dom';
  import { useLocation } from "react-router-dom";
  // import { useEffect } from "react";
import { render } from '@testing-library/react';

function Call_api(acc_id){

  
  const [datas,setData] = useState(null)
  const location = useLocation();

  const id = location.state.detail;
  useEffect(()=>{
    const url = `http://localhost:3000/getirt/${id}`;
    fetch(url).then(resp=>resp.json())
    .then(resp=>setData(resp))
  },[])

  
  if (datas){
    return(
      <div>
        <h1>{datas.irt.sensor_number}</h1>
        <h1>{datas.irt.vehicle_id}</h1>
        <h1>{datas.irt.manufacture_date}</h1>
        <h1>{datas.irt.calibration_date}</h1>
      </div>
     )

  }
  
}

export default Call_api;


      //console.log(accelerometer);


    //const test = data.irt.vehicle_id;

  
    //.then(data => {data.irt.vehicle_id});
    //<Redirect to="/test"/>;
    
    // how to redirect to another page in react from a function
  
    //use this reference : https://mocki.io/call-a-rest-api-in-react
  
  // export default function AccelerometerS1111 () {

  //   const classes = useStyles();
  //   const location = useLocation();

  //     callApi(location.state.detail); 

  //   async function callApi(acc_id){
        
  //       const response = await fetch(url, {method: 'GET'});
  //       const data =  await response.json();
  //       this.setState({ accelerometer: data, loading: false});
  //       console.log(data)
  //       }
  //     return (
  //       <div> 
  //         {this.state.loading || !this.state.accelerometer ? (
  //         <div> loading...</div>
  //         ) : (
  //         <div>
  //           <div>{this.state.accelerometer.sensor_number}</div>
  //           <div>{this.state.accelerometer.vehicle_id}</div>
  //           <div>{this.state.accelerometer.manufacture_date}</div>
  //           <div>{this.state.accelerometer.calibration_date}</div>
  //           <div>{this.state.accelerometer.installation_date}</div>
  //           <div>{this.state.accelerometer.status}</div>
  //         </div>)}
  //       </div>
  //       );
  // }
  
  // styles
  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      alignItems: 'center',
      '& .MuiGrid-item': {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    button: {
      borderRadius: 35,
      backgroundColor: "#5E8ACF",
      padding: "18px 36px",
      fontSize: "18px",
      color: "white"
    },
  }));