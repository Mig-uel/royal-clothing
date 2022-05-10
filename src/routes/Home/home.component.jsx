import { Outlet } from 'react-router-dom'

// Components
import Directory from '../../components/directory/directory.component'

const Home = () => {

  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
}

export default Home;