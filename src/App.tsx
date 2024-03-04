import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE, MARKETPLACE } from './routes/routeConstant';

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE} Component={} />
      <Route path={MARKETPLACE} Component={} />
    </Routes>
  );
}

export default App;
