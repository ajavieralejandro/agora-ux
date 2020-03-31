import React from "react";
import Button from "@material-ui/core/Button";
import { FiShoppingCart } from "react-icons/fi";

const CartButton2 = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<FiShoppingCart></FiShoppingCart>}
    >
      Comprar
    </Button>
  );
};

export default CartButton2;
