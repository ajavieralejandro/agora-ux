import React from 'react';
import IconButton from '../../IconButton/icon-button.component';
import { FaFacebook } from 'react-icons/fa';


const FooterIcons = () => {
    const FacebookIcon = IconButton(FaFacebook);
    console.log("facebook icon es :",FacebookIcon);
    return(
        <div>
            <h1>Hola, se supone que tengo que estar renderizando el objeto: </h1>
            <FacebookIcon />
        </div>
    )    

}

export default FooterIcons;