import classes from "./CartItem.module.css";

import { useSelector } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price, handleIncrease, handleDecrease } =
    props.item;

  const items = useSelector((state) => state.cartItems.items);
  console.log("cartItems: ", items);

  const articulo = {
    title,
    quantity,
    total,
    price,
  };

  const onIncrease = () => {
    handleIncrease(articulo);
  };

  const onDecrease = () => {
    handleDecrease(title);
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onIncrease}>-</button>
          <button onClick={onDecrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
