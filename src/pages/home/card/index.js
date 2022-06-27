import React from "react";

import Products from "./products";
import Cart from "./cart";

import { useStyles } from "./useStyles";

const Card = (props) => {
  const classes = useStyles();

  const title = props.title;

  return (
    <div className={classes.card}>
      <div className={classes.card_logo}>
        <img src="/assets/nike.png" width="50px" alt="nike.png" />
      </div>
      {title === "Our Products" ? <Products /> : <Cart />}
    </div>
  );
};

export default Card;
