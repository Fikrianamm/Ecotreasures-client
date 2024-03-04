import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE, MARKETPLACE } from './routes/routeConstant';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE} Component={Home} />
      <Route path={MARKETPLACE} Component={Home} />
    </Routes>
  );
}

export default App;
