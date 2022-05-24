// React Methods
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';

// Components
import { UserContext } from '../../contexts/user.context';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// Firebase
import { signOutUser } from '../../utils/firebase/firebase.utils'

// Icons
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

// Styles
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <div className="logo-container">
            <CrwnLogo className='logo' />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          {
            currentUser ?
              (<span onClick={signOutUser} className="nav-link">SIGN OUT</span>) :
              (<Link className="nav-link" to="/auth">SIGN IN</Link>)
          }
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>);
}

export default Navigation;