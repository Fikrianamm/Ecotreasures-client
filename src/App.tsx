import { Route, Routes } from 'react-router-dom';
import {
  HOME_PAGE, LOGIN_PAGE, MARKETPLACE, SIGNUP_PAGE,
} from './routes/routeConstant';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE} Component={Home} />
      <Route path={SIGNUP_PAGE} Component={SignUp} />
      <Route path={LOGIN_PAGE} Component={Login} />
      <Route path={MARKETPLACE} Component={Marketplace} />
    </Routes>
  );
}

export default App;
