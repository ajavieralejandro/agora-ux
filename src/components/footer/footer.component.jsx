import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FooterIcons from './footerIcons/footer-icons.component';

import {FooterDiv,FooterContainer,BackDiv} from './footer.styles';
const Footer = () =>{
    return(
        <BackDiv>
            <FooterDiv>
            <Container>

                <Grid container spacing={1}>
                    <Grid container item xs={12} md={4} spacing={3}>
                    <h1>hola soy una prueba</h1>
                    </Grid>
                    <Grid container item xs={12} md={4}  spacing={3}>
                    <h1>hola soy una prueba</h1>
                    </Grid>
                    <Grid container item xs={12} md={4}  spacing={3}>
                    <FooterIcons />
                    </Grid>                
                </Grid>
                </Container>    
        </FooterDiv>
        </BackDiv>

    )
}

export default Footer; 