// React Methods
import { useContext } from 'react'

// Components
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'

// Styles
import './cart-icon.styles.scss';

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;