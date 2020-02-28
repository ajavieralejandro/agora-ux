import React from 'react';
import {default as WrappedIcon} from '@material-ui/core/IconButton';
const IconButton = (Icon) => () =>{
    console.log("estoy recibiendo :",Icon);
    return(
    <WrappedIcon aria-label="icon">
        <Icon />
    </WrappedIcon>
    );
}
export default IconButton