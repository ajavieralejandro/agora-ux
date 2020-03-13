import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { StyledGrid } from './register-body.styles';
import { Image } from 'semantic-ui-react'




const RegisterBody = () => {
    return(
    <Grid container spacing={1}>
    <Hidden mdDown>
    <StyledGrid item md={6}>
    <Image src='https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg'/>
    </StyledGrid>
    </Hidden>
    <Grid container item xs={12} md={6}>
      <h1>Estoy del otro lado</h1>
    </Grid>
  </Grid>)

}

export default RegisterBody;