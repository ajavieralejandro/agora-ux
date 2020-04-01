import React from "react";
import { StyledButton, Wrap } from "./cartButton2-styles";
import Button from "@material-ui/core/Button";
import { FiShoppingCart } from "react-icons/fi";

const CartButton2 = () => {
  return (
    <Wrap>
      <StyledButton
        variant="contained"
        color="primary"
        endIcon={<FiShoppingCart></FiShoppingCart>}
      >
        Comprar
      </StyledButton>
    </Wrap>
  );
};

export default CartButton2;
