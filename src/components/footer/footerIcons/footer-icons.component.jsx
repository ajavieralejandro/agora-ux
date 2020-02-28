import React from 'react';
import IconButton from '../../IconButton/icon-button.component';
import { FaFacebook } from 'react-icons/fa';


const FooterIcons = () => {
    const facebookIcon = IconButton("facebook",FaFacebook);
    console.log("facebook icon es :",facebookIcon);
    return(
        <div>
            <h1>Hola, se supone que tengo que estar renderizando el objeto</h1>
        </div>
    )    

}

export default FooterIcons;