import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {DD,DT} from './footer.styles';



const FooterBody = () =>{
    return(
       
        <Container fixed>
        <h1>Agora3D</h1>
            <Grid container spacing={1}>
                <Grid   item md={4} xs={12}>
                
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
                >
                    <dl>
                    <DT>Coffee</DT>
                    <DD>Black hot drink</DD>
                    <DD>Milk</DD>
                    <DD>White cold drink</DD>
                    </dl>      
                </Grid>

               

            </Grid>
            <Grid item md={4} xs={12}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >

                    <dl>
                    <DT>Coffee</DT>
                    <DD>Black hot drink</DD>
                    <DD>Milk</DD>
                    <DD>White cold drink</DD>
                    </dl>     
                
                </Grid>

            </Grid>

            <Grid item md={4} xs={12}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >

                    <dl>
                    <DT>Coffee</DT>
                    <DD>Black hot drink</DD>
                    <DD>Milk</DD>
                    <DD>White cold drink</DD>
                    </dl>     
                
                </Grid>

            </Grid>


            </Grid>
        </Container>
    )

}

export default FooterBody;