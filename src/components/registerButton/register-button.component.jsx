import React from 'react'
import Button from '@material-ui/core/Button';
import {ButtonDiv} from '../cartButton/cartButton.styles';

const RegisterButton = () =>{

    return(
        <ButtonDiv>
            <Button variant="outlined" color="secondary">
                Registrate
            </Button>
            </ButtonDiv>
    );
}
export default RegisterButton;