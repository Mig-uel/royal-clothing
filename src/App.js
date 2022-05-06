import { Routes, Route } from 'react-router-dom';


// Components
import Home from './routes/Home/home.component'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
    </Routes>
  );
}

export default App;