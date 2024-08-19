import { create, StoreApi, UseBoundStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { toast } from 'react-toastify';
import {
  IAuthStore,
  ICredentials,
  IUser,
  IUserRegister,
  IUserUpdate,
} from '../types/types';
import {
  getAccessToken,
  getAuthUser, login, register, updateUser,
} from '../utils/api';
import getErrorMessage from '../utils/error';
import cookiesStorage from '../utils/cookiesStorage';

const useAuth: UseBoundStore<StoreApi<IAuthStore>> = create(persist((set) => ({
  user: null,
  loading: false,
  accessToken: null,
  login: async (credentials: ICredentials) => {
    try {
      set(() => ({ loading: true }));
      const { success, message, token } = await login(credentials);

      if (!success) {
        throw new Error(message);
      }
      set(() => ({ accessToken: token }));
      const response: IUser = await getAuthUser();
      // if (success) {
      //   throw new Error(message);
      // }
      if (response.name) {
        set(() => ({ user: response }));
      }
      toast.success('Login Berhasil!', {
        position: 'top-center',
      });
      return { message: 'Login Successful!', success: true };
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(`Login Gagal! ${message}`, {
        position: 'top-center',
      });
      return { message, success: false };
    } finally {
      set(() => ({ loading: false }));
    }
  },
  logout: () => {
    set(() => ({
      user: null,
      accessToken: null,
    }));
    // Cookies.remove('token');
    return { message: 'Logout Successful!', success: true };
  },
  register: async (registerData: IUserRegister) => {
    try {
      set(() => ({ loading: true }));
      const { success, message } = await register(registerData);
      if (!success) {
        throw new Error(message);
      }
      toast.success('Register Berhasil!, Silahkan Login', {
        position: 'top-center',
      });
      return { message: 'Registration Successful!', success: true };
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(`Register Gagal! ${message}`, {
        position: 'top-center',
      });
      return { message, success: false };
    } finally {
      set(() => ({ loading: false }));
    }
  },
  updateUser: async (id: string, updateData: IUserUpdate) => {
    try {
      set(() => ({ loading: true }));
      const { success, message } = await updateUser(id, updateData);
      if (!success) {
        throw new Error(message);
      }
      toast.success('Update Berhasil!', {
        position: 'top-center',
      });
      return { message: 'Registration Successful!', success: true };
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(`Update Gagal! ${message}`, {
        position: 'top-center',
      });
      return { message, success: false };
    } finally {
      set(() => ({ loading: false }));
    }
  },
  preload: async () => {
    try {
      const token = getAccessToken();
      if (token) {
        set(() => ({ loading: true }));
        const response: IUser = await getAuthUser();
        // if (success) {
        //   throw new Error(message);
        // }
        if (response) {
          set(() => ({ user: response }));
          return { message: 'Get User Successful!', success: true };
        }
      }
      return { message: 'Not logged in yet!', success: false };
    } catch (error) {
      const message = getErrorMessage(error);
      return { message, success: false };
    } finally {
      set(() => ({ loading: false }));
    }
  },
}), {
  name: 'auth',
  storage: createJSONStorage(() => cookiesStorage),
  partialize: (state: IAuthStore) => ({ user: state.user, accessToken: state.accessToken }),
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unsub = useAuth.subscribe(console.log);

export default useAuth;
