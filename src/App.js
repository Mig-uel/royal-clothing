// import chalk from 'chalk';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './routes/Home/home.component'
import Navigation from './routes/Navigation/navigation.component'
import Auth from './routes/auth/auth.component'
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigation />} >
        <Route index element={<Home />} exact />
        <Route path='shop' element={<Shop />} exact />
        <Route path='auth' element={<Auth />} exact />
        <Route path='checkout' element={<Checkout />} exact />
      </Route>
    </Routes>
  );
}

export default App;