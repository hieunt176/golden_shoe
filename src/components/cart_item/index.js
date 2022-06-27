import React from "react";

import { connect } from "react-redux";
import { deleteProduct, increase, reduce } from "../../actions";

import { useStyles } from "./useStyles";

const CartItem = (props) => {
  const { image, name, price, color } = props.shoe;
  const product = props.shoe;
  const objIndex = props.cart.findIndex((obj) => obj.id === product.id);

  const classes = useStyles({ color });
  console.log("props.c", props);

  return (
    <div className={classes.item}>
      <div className={classes.item_left}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.item_right}>
        <div className={classes.item_name}>{name}</div>
        <div className={classes.item_price}>{"$" + price}</div>
        <div className={`${classes.item_action} ${"flex-display"}`}>
          <div className={`${classes.item_count} ${"flex-display"}`}>
            <button
              className={classes.item_count_btn}
              onClick={() => props.reduce(product)}
            >
              -
            </button>
            <div className={classes.item_count_number}>
              {props.cart[objIndex].quantity}
            </div>
            <button
              className={classes.item_count_btn}
              onClick={() => props.increase(product)}
            >
              +
            </button>
          </div>
          <button
            className={classes.item_remove}
            onClick={() => props.deleteProduct(product)}
          >
            <img src="/assets/trash.png" alt="trash.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product)),
    increase: (product) => dispatch(increase(product)),
    reduce: (product) => dispatch(reduce(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
