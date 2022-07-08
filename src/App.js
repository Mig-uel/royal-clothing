import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Components
import Spinner from './components/spinner/spinner.component'
import { checkUserSession } from './store/user/user.action'

const Home = lazy(() => import('./routes/Home/home.component'))
const Auth = lazy(() => import('./routes/auth/auth.component'))
const Navigation = lazy(() =>
  import('./routes/Navigation/navigation.component')
)
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path='/' element={<Navigation />}>
          <Route index element={<Home />} exact />
          <Route path='shop/*' element={<Shop />} exact />
          <Route path='auth' element={<Auth />} exact />
          <Route path='checkout' element={<Checkout />} exact />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
