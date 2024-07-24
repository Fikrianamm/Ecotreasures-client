import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Button } from '../component/buttons';
import { LOGIN_PAGE } from '../routes/routeConstant';
import AuthLayout from '../component/layouts/authLayout';
import useInput from '../hooks/useInput';
import useAuth from '../store/useAuth';

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const { loading, register } = useAuth();

  const registerData = {
    name,
    email,
    password,
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading === false) {
      console.log('handlesignup');
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
    <AuthLayout>
      <div className="flex flex-col justify-center min-w-[432px] gap-4 p-8 border rounded shadow-xl border-slate-300 my-14">
        <h4 className="text-3xl font-medium text-center text-slate-800 font-redHatText">Daftar Sekarang</h4>
        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="name" className="flex flex-col gap-1">
              Nama
              <input type="text" id="name" className="px-2 py-1 border rounded outline-green-600 border-slate-400" placeholder="Masukkan nama Anda" value={name} onChange={setName} required />
            </label>
          </div>
          <div>
            <label htmlFor="email" className="flex flex-col gap-1">
              Email
              <input type="email" id="email" className="px-2 py-1 border rounded outline-green-600 border-slate-400" placeholder="Masukkan email (contoh@gmail.com)" value={email} onChange={setEmail} required />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="flex flex-col gap-1">
              Password
              <input type="password" id="password" className="px-2 py-1 border rounded outline-green-600 border-slate-400" placeholder="Masukkan password" value={password} onChange={setPassword} required />
            </label>
          </div>
          <Button typebtn="submit" title="Sign Up" className="mt-1">
            {loading && (<AiOutlineLoading3Quarters className="animate-spin" />)}
            {loading ? 'Processing...' : 'Sign Up'}
          </Button>

        </form>
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
