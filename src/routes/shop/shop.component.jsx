// React Methods
import { useContext } from 'react';

// Components
import { ProductsContext } from '../../contexts/products.context'
import ProductCard from '../../components/product-card/product-card.component';

// Styles
import './shop.styles.scss';

const Shop = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((item) => {
        return (
          <ProductCard key={item.id} product={item} />
        )
      })}
    </div>
  );
}

export default Shop;