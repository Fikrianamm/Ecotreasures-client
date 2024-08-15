import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import useAuth from '../../store/useAuth';
import { ICredentials } from '../../types/types';
import { MARKETPLACE } from '../../routes/routeConstant';
import { validationLoginSchema } from '../../validation/validation';
import { Button } from '../Buttons';

export default function LoginForm() {
  const navigate = useNavigate();
  const { loading, login } = useAuth();

  const initialsLoginValue: ICredentials = {
    email: '',
    password: '',
  };

  const handleLogin = async (values: ICredentials) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    if (!loading) {
      try {
        const { success } = await login(credentials);
        if (success) {
          navigate(MARKETPLACE);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Formik
      initialValues={initialsLoginValue}
      validationSchema={validationLoginSchema}
      onSubmit={handleLogin}
    >
      <Form className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="flex flex-col gap-1">
            Email
            <Field type="email" id="email" name="email" className="input" placeholder="Masukkan email (contoh@gmail.com)" />
            <ErrorMessage name="email" component="div" className="text-red-500 error" />
          </label>
        </div>
        <div>
          <label htmlFor="password" className="flex flex-col gap-1">
            Password
            <Field type="password" id="password" name="password" className="input" placeholder="Masukkan password" />
            <ErrorMessage name="password" component="div" className="text-red-500 error" />
          </label>
        </div>
        <Button typebtn="submit" title="Sign Up" className="mt-1">
          {loading && (<AiOutlineLoading3Quarters className="animate-spin" />)}
          {loading ? 'Processing...' : 'Login'}
        </Button>
      </Form>
    </Formik>
  );
}
