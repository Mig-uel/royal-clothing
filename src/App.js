import { Routes, Route } from 'react-router-dom';

// Components
import Home from './routes/Home/home.component'
import Navigation from './routes/Navigation/navigation.component'

const Shop = () => {
  return <h1>Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigation />} >
        <Route index element={<Home />} exact />
        <Route path='shop' element={<Shop />} exact />
      </Route>
    </Routes>

  );
}

export default App;