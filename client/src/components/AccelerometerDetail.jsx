import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  import { useHistory } from 'react-router-dom';
  import { useLocation } from "react-router-dom";
  import { useEffect } from "react";



  function callApi(acc_id){
    const id = acc_id;
    
    fetch(`http://localhost:3000/getirt/${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => 
      {this.setState({ accelerometer: data})});

      //console.log(accelerometer);


    //const test = data.irt.vehicle_id;

  
    //.then(data => {data.irt.vehicle_id});
    //<Redirect to="/test"/>;
    
    // how to redirect to another page in react from a function
  
    //use this reference : https://mocki.io/call-a-rest-api-in-react
  
  }
  
  export default function AccelerometerS1111 () {
      const classes = useStyles();
      const location = useLocation();

      callApi(location.state.detail); 

  
    
    return (

      <h1> hello </h1>

  
    );
  };
  
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