import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FooterIcons from './footerIcons/footer-icons.component';
import FooterBody from './footer-body.component';

import {FooterDiv,BackDiv, FooterBodyContainer, FooterContainer} from './footer.styles';
const Footer = () =>{
    return(
        <FooterContainer>
        <FooterBodyContainer>
            <FooterBody />
        </FooterBodyContainer>
        <BackDiv>
            <FooterDiv>
                <Container>
                    <FooterIcons />
                </Container>    
            </FooterDiv>
        </BackDiv>
        </FooterContainer>

    )
}

export default Footer; 