import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  IAuthStore,
  ICredentials,
  IUserRegister,
  IUserUpdate,
} from '../types/types';
import {
  getErrorMessage, login, register, updateUser,
} from '../utils/api';

const useAuth = create(persist((set) => ({
  user: null,
  loading: false,
  accessToken: null,
  login: async (credentials: ICredentials) => {
    try {
      set(() => ({ loading: true }));
      const { success, message } = await login(credentials);
      if (!success) {
        throw new Error(message);
      }
      return { message: 'Login Successful', success: true };
    } catch (error) {
      const message = getErrorMessage(error);
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
    return { message: 'Logout Successful', success: true };
  },
  register: async (registerData: IUserRegister) => {
    try {
      set(() => ({ loading: true }));
      const { success, message } = await register(registerData);
      if (!success) {
        throw new Error(message);
      }
      return { message: 'Registration Successful', success: true };
    } catch (error) {
      const message = getErrorMessage(error);
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
      return { message: 'Registration Successful', success: true };
    } catch (error) {
      const message = getErrorMessage(error);
      return { message, success: false };
    } finally {
      set(() => ({ loading: false }));
    }
  },
}), {
  name: 'auth',
  partialize: (state : IAuthStore) => ({ user: state.user, accessToken: state.accessToken }),
}));

export default useAuth;
