import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const FooterBody = () =>{
    return(
       
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item md={4}>
                <h1>Agora3D</h1>
                </Grid>
            <Grid item md={4}>                <h1>Agora3D</h1>

               
            </Grid>
            <h1 style={{'text-align':'center'}}>Agora3D</h1>

            <Grid item md={4}>
            </Grid>

            </Grid>
        </Container>
    )

}

export default FooterBody;