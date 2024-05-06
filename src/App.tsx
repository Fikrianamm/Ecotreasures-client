import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE, MARKETPLACE, SIGNUP_PAGE } from './routes/routeConstant';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE} Component={Home} />
      <Route path={SIGNUP_PAGE} Component={SignUp} />
      <Route path={MARKETPLACE} Component={Home} />
    </Routes>
  );
}

export default App;
