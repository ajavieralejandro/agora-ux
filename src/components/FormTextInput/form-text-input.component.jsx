import React from 'react';
import {MarginTop,StyledText} from './form-text-input.styles';


const FormTextInput = ({label}) => {
    return(
        <MarginTop>
            <StyledText label={label}/>
        </MarginTop>
    )
}

export default FormTextInput;