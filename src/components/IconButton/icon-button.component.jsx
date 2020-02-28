import React from 'react';
import {default as WrappedIcon} from '@material-ui/core/IconButton';
const IconButton = (Icon,label) => () =>{
    console.log("estoy recibiendo :",label);
    return(
    <WrappedIcon aria-label="icon">
        <Icon style={{'font-size':'45px'}} />
    </WrappedIcon>
    );
}
export default IconButton