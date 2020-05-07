import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { FiShoppingCart } from "react-icons/fi";
import { ButtonDiv } from "./cartButton.styles";

const CartButton = () => {
  return (
    <ButtonDiv>
      <IconButton color="primary">
        2
        <FiShoppingCart />
      </IconButton>
    </ButtonDiv>
  );
};

export default CartButton;
