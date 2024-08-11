import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import useAuth from '../../store/useAuth';
import { Button } from '../buttons';
import { IUserRegister } from '../../types/types';
import { LOGIN_PAGE } from '../../routes/routeConstant';
import { validationSignUpSchema } from '../../validation/validation';

export default function SignUpForm() {
  const navigate = useNavigate();
  const { loading, register } = useAuth();

  const initialSignUpSchema = {
    name: '',
    email: '',
    password: '',
  };

  const handleSignUp = async (values: IUserRegister) => {
    const registerData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    if (!loading) {
      try {
        const { success } = await register(registerData);
        if (success) {
          navigate(LOGIN_PAGE);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Formik
      initialValues={initialSignUpSchema}
      validationSchema={validationSignUpSchema}
      onSubmit={handleSignUp}
    >
      <Form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="flex flex-col gap-1">
            Nama
            <Field type="text" id="name" name="name" className="px-2 py-1 border rounded outline-green-600 border-slate-400" placeholder="Masukkan nama Anda" />
            <ErrorMessage name="name" component="div" className="text-red-500 error" />
          </label>
        </div>
        <div>
          <label htmlFor="email" className="flex flex-col gap-1">
            Email
            <Field type="email" id="email" name="email" className="px-2 py-1 border rounded outline-green-600 border-slate-400" placeholder="Masukkan email (contoh@gmail.com)" />
            <ErrorMessage name="email" component="div" className="text-red-500 error" />
          </label>
        </div>
        <div>
          <label htmlFor="password" className="flex flex-col gap-1">
            Password
            <Field type="password" id="password" name="password" className="px-2 py-1 border rounded outline-green-600 border-slate-400" placeholder="Masukkan password" />
            <ErrorMessage name="password" component="div" className="text-red-500 error" />
          </label>
        </div>
        <Button typebtn="submit" title="Sign Up" className="mt-1">
          {loading && (<AiOutlineLoading3Quarters className="animate-spin" />)}
          {loading ? 'Processing...' : 'Sign Up'}
        </Button>

      </Form>
    </Formik>
  );
}
