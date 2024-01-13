import classes from "./CartItem.module.css";

import { useSelector, useDispatch } from "react-redux";

import { cartItemsActions } from "../../store/cartItems";

const CartItem = (props) => {
  const { title, quantity, total, price, id } =
    props.item;

  const items = useSelector((state) => state.cartItems.items);
  console.log("cartItems: ", items);

  const dispatch = useDispatch();
  const handleIncrease = () => {
    const articulo = {
      id,
      title,
      price
    };
    console.log('articulo de Cart.js: ', articulo);
    dispatch(cartItemsActions.addItem(articulo));
  };

  const handleDecrease = () => {
    dispatch(cartItemsActions.removeItem(id));
  };


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(Number(total)).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${(Number(price)).toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
