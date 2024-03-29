import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useDispatch } from "react-redux";
import { cartButtonCounterActions } from "../../store/cartButtonCounter.js";
import { cartItemsActions } from "../../store/cartItems";

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  const incrementCartItems = () => {
    const producto = { id: id, title: title, price: price, description: description };
    console.log(producto);
    dispatch(cartButtonCounterActions.increment());
    dispatch(cartItemsActions.addItem( producto ));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={incrementCartItems}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
