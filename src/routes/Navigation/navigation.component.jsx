// React Methods
import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom';

// Components
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context';

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// Firebase
import { signOutUser } from '../../utils/firebase.utils'

// Icons
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

// Styles
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {
            currentUser ?
              (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) :
              (<NavLink className="nav-link" to="/auth">SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>);
}

export default Navigation;