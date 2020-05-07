import "./cart-icon.styles.scss";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

//import { toggleCartHidden } from "../../redux/cart/cart.actions";
//import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import React from "react";
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { FiShoppingCart } from "react-icons/fi";
import IconButton from "@material-ui/core/IconButton";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  console.log("hola");
  console.log(toggleCartHidden);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <IconButton>
        <FiShoppingCart className="shopping-icon" />
      </IconButton>
    </div>
  );
};

/*const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
*/
export default //connect(mapStateToProps, mapDispatchToProps)
CartIcon;
