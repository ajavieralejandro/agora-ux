import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import {FiShoppingCart} from "react-icons/fi";
import {ColorDiv} from './cartButton.styles';

const CartButton = () => {

    return(
        <IconButton color="primary">
            <FiShoppingCart />
        </IconButton>
    );

    

}

export default CartButton;