import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { FiShoppingCart } from "react-icons/fi";

const CartButton2 = () => {
  return (
    <IconButton color="primary">
      Comprar
      <FiShoppingCart />
    </IconButton>
  );
};

export default CartButton2;
