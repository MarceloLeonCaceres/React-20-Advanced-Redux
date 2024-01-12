import classes from './CartItem.module.css';

import { useSelector, useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price, onIncrease, onDecrease } = props.item;

  const itemsContador = useSelector((state) => state.itemsCounter.itemsCounter);
  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
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
