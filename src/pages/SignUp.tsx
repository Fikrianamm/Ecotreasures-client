import { FcGoogle } from 'react-icons/fc';
import { Button } from '../component/buttons';
import { LOGIN_PAGE } from '../routes/routeConstant';
import AuthLayout from '../component/layouts/authLayout';
import SignUpForm from '../component/forms/SignUpForm';

export default function SignUp() {
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center min-w-[432px] gap-4 p-8 border rounded shadow-xl border-slate-300 my-14">
        <h4 className="text-3xl font-medium text-center text-slate-800 font-redHatText">Daftar Sekarang</h4>
        <SignUpForm />
        <div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex-1 h-[1px] bg-slate-500" />
            <small>atau daftar dengan</small>
            <div className="flex-1 h-[1px] bg-slate-500" />
          </div>
          <Button title="Google" type="transparentGrey" className="flex w-full gap-2">
            <FcGoogle />
            Google
          </Button>
          <div className="mt-2 text-center">
            Sudah punya akun?
            <a href={LOGIN_PAGE} className="ml-1 text-blue-600">Login sekarang</a>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
