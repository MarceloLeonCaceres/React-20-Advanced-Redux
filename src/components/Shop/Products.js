import ProductItem from './ProductItem';
import classes from './Products.module.css';

import PRODUCTOS from '../../data/productos';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTOS.map((producto) => (
          <ProductItem
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={Number(producto.price)}
          description={producto.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
