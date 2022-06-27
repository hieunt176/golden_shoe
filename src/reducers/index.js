import * as actionType from "../actions/actionType";

const initialState = {
  cartAr: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        let newproduct = action.payload;
        newproduct.quantity = 1;
        newproduct.total = Number(newproduct.price);

        return {
          cartAr: [...state.cartAr, newproduct],
        };
      } else {
        let newcart = state.cartAr;
        const objIndex = newcart.findIndex(
          (obj) => obj.id === action.payload.id
        );

        newcart[objIndex].quantity = newcart[objIndex].quantity + 1;

        return { cartAr: [...newcart] };
      }
    case actionType.DELETE_PRODUCT:
      let newcart = state.cartAr;
      const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id);
      newcart.splice(objIndex, 1);
      return { cartAr: [...newcart], totalprice: 0 };

    case actionType.INCREASE:
      let cart = state.cartAr;
      const index = cart.findIndex((obj) => obj.id === action.payload.id);

      cart[index].quantity = cart[index].quantity + 1;
      cart[index].total =
        Number(cart[index].price) * Number(cart[index].quantity);
      return { cartAr: [...cart] };

    case actionType.REDUCE:
      let reduceCart = state.cartAr;
      const reduceIndex = reduceCart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      reduceCart[reduceIndex].quantity = reduceCart[reduceIndex].quantity - 1;
      reduceCart[reduceIndex].total =
        Number(reduceCart[reduceIndex].price) *
        Number(reduceCart[reduceIndex].quantity);
      if (reduceCart[reduceIndex].quantity === 0) {
        reduceCart.splice(reduceIndex, 1);
      }
      return { cartAr: [...reduceCart] };
    default:
      return state;
  }
};

export default cartReducer;
