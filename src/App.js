import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Components
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { checkUserSession } from './store/user/user.action';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route exact path='/' element={<Navigation />} >
        <Route index element={<Home />} exact />
        <Route path='shop/*' element={<Shop />} exact />
        <Route path='auth' element={<Auth />} exact />
        <Route path='checkout' element={<Checkout />} exact />
      </Route>
    </Routes>
  );
}

export default App;