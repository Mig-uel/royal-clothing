// React Hooks
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

// Styles
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        {
          cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />) : <EmptyMessage>Your shopping cart is empty.</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;