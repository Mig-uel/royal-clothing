import { Routes, Route, Outlet } from 'react-router-dom';


// Components
import Home from './routes/Home/home.component'

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar.</h1>
      </div>
      <Outlet />
    </div>
  )
}

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