import React from 'react';
import { Grid } from '@material-ui/core';

function Contact(){
  return (
    <Grid container>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
        <h1>Contact Us</h1>
      </Grid>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h3>Test</h3>
      </Grid>

    </Grid>
  );
}

export default Contact;
