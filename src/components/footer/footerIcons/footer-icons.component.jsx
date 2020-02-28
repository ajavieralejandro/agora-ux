import React from 'react';
import IconButton from '../../IconButton/icon-button.component';
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import {ContainerDiv} from './footer-icons.styles';
import Container from '@material-ui/core/Container';




const FooterIcons = () => {

    const FacebookIcon = IconButton(FaFacebook,"facebook-icon");
    const InstagramIcon = IconButton(FaInstagram,"instagram-icon");
    const TwitterIcon = IconButton(FaTwitter,"twitter-icon");

    console.log("facebook icon es :",FacebookIcon);
    return(
        <ContainerDiv>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
        </ContainerDiv>
    )    

}

export default FooterIcons;