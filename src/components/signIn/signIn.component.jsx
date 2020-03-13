import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const SignIn = () => {

    return(
        <form  noValidate autoComplete="off">
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
            <TextField  label="Nombre" />
            <TextField  label="Apellido" />
            <TextField  label="Usuario" />
            <TextField  label="mail" />
            </Grid>
        </form>
    )
}

export default SignIn;