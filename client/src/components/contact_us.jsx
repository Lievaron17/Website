import React from 'react';
import { Grid } from '@material-ui/core';

function Contact(){
  return (
    <Grid container>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
        <h1>Contact Us</h1>
      </Grid>
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h3>Phone: +61 3 9905 1880</h3>
      </Grid>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h3>Fax: +61 3 9905 1972</h3>
      </Grid>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h3>Email: irt.enquiries@monash.edu</h3>
      </Grid>
      <Grid item xs = {4}>

      </Grid>
      <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
       <div style ={{width:'50%'}}><h3>
            Postal Address:
            Room G33, Building 31,
            17 College Walk,
            Monash University, Clayton Campus,
            Victoria 3800, Australia.</h3>
            </div> 
      </Grid>
      <Grid item xs = {4}>

      </Grid>
    </Grid>
  );
}

export default Contact;
