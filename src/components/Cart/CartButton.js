import { useSelector, useDispatch } from 'react-redux';

import { cartCounterActions } from '../../store/cartCounter';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const counter = useSelector((state) => state.cartCounter.cartCounter);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
