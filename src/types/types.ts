/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProduct {
  title:string
  image:string
  price:number
  stock:number
  detail:string
}

interface IUser {
  name: string
  email: string
  id: number
  role: string | null
  phone: string | null
  image: string | null
}

interface IUserRegister {
  name: string
  email: string
  password: string
}

interface IUserUpdate {
  name?: string
  email?: string
  password?: string
}

interface ICredentials {
  email: string
  password:string
}

interface IResponse {
  message: string
  success: boolean
  data?: any
}

interface IAuthStore {
  user: IUser | null
  loading: boolean
  accessToken: string | null
  login: (credentials: ICredentials) => Promise<IResponse>
  logout: () => void
  register: (registerData: IUserRegister) => Promise<IResponse>
  updateUser: (id:string, updateData:IUserUpdate) => Promise<IResponse>
}

export type {
  IProduct,
  IUserRegister,
  IUserUpdate,
  ICredentials,
  IResponse,
  IAuthStore,
};
