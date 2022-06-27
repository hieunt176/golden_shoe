import React from "react";

import { connect } from "react-redux";
import { buyProduct } from "../../actions";

import { useStyles } from "./useStyles";

const ShopItem = (props) => {
  const { image, name, description, price, color } = props.shoe;
  const product_current = props.shoe;

  const productInCart = props.cart.find((p) => p.id === product_current.id);

  const classes = useStyles({ color });

  const handleClick = () => {
    props.buyProduct(product_current);
  };

  return (
    <div className={classes.item}>
      <div className={classes.item_img}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.item_name}>{name}</div>
      <div className={classes.item_description}>{description}</div>
      <div className={classes.item_bottom}>
        <div className={classes.item_price}>{"$" + price}</div>

        {!productInCart ? (
          <button className={classes.item_btn} onClick={handleClick}>
            ADD TO CART
          </button>
        ) : (
          <button className={classes.item_btn_checked}>
            <img src="/assets/check.png" alt="check.png" />
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (product_current) => dispatch(buyProduct(product_current)),
  };
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartAr,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
