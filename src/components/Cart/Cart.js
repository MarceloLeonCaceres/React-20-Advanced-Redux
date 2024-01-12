import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector, useDispatch } from "react-redux";

import { cartItemsActions } from "../../store/cartItems";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);
  console.log("desde Cart.js");
  console.log("cartItems: ", cartItems);

  const dispatch = useDispatch();
  const handleIncrease = (articulo) => {
    dispatch(cartItemsActions.addItem(articulo));
  };
  const handleDecrease = (title) => {
    dispatch(cartItemsActions.removeItem(title));
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <p>Linea en blanco</p>
        {cartItems.map((item) => (
          <CartItem
            item={{
              title: item.id,
              quantity: item.quantity,
              total: item.total,
              price: item.price,
              handleIncrease,
              handleDecrease,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
