import React from 'react';
import Grid from '@material-ui/core/Grid';
import Member from '../member/member.component';
import {Wrap} from './home-page-body.style';
import SearchButton from '../search/search.component';
import Paper from '@material-ui/core/Paper';


const HomePageBody = () => {
    return(
        <Wrap>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}> 
        <h1>Hola soy una prueba</h1>
        <SearchButton />
        </Grid> <Grid item xs={12} md={8} container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >

      <Grid container spacing={1}>
      <Grid item md={4} ><Member /></Grid>
      <Grid item  md={4}><Member /></Grid>
      <Grid item  md={4}><Member /></Grid>   
      </Grid>
      
     
        </Grid>

        </Grid>
        </Wrap>

        )



}

export default HomePageBody; 