import React from 'react';
import {default as WrappedIcon} from '@material-ui/core/IconButton';
const IconButton = (label,icon) =>{
    return(
    <WrappedIcon aria-label={label}>
        {icon}
    </WrappedIcon>
    );
}
export default IconButton