import { useSelector, useDispatch } from 'react-redux';

import classes from './CartButton.module.css';

import { cartShowActions } from '../../store/cartShow';


const CartButton = (props) => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cartItems.totalQuantity);

const handleToggleCartVisibility = () => {
  dispatch(cartShowActions.toggleShow());
};

  return (
    <button className={classes.button} onClick={handleToggleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
