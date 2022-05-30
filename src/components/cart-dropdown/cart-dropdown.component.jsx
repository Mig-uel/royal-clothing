// Components
import Button from '../../components/button/button.component'
import CartItem from '../../components/cart-item/cart-item.component'

// Styles
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[].map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;