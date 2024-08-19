import { RouterProvider } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import {
  routes,
} from './routes/routeConstant';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from './store/useAuth';

function App() {
  const { preload, user } = useAuth();

  useEffect(() => {
    if (!user?.name) {
      console.log('preload');

      preload();
    }
  }, [preload, user]);

  return (
    <>
      <ToastContainer transition={Slide} hideProgressBar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
