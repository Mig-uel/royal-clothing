import { useContext } from 'react';

// Components
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
// Styles
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;