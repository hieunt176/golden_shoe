import React, { Fragment } from "react";

import { connect } from "react-redux";
import { deleteProduct } from "../../../../actions";

import CartItem from "../../../../components/cart_item";

import { useStyles } from "../useStyles";

const Cart = (props) => {
  const classes = useStyles();

  const shoes = props.cart;

  const totalPrice = () => {
    let temp = 0;
    shoes.map((shoe) => {
      temp += shoe.total;
      return;
    });
    temp = temp.toFixed(2);
    return temp;
  };

  const renderCart = () => {
    if (shoes.length === 0) {
      return <span>Your cart is empty.</span>;
    }
    return shoes.map((shoe, key) => {
      return <CartItem shoe={shoe} key={key} />;
    });
  };

  return (
    <Fragment>
      <div className={classes.card_title}>
        Your cart
        <span>{"$" + totalPrice()}</span>
      </div>
      <div className={classes.card_body}>{renderCart()}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
