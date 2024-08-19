/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProduct {
  id:number
  title:string
  thumbnail:string
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
  product_data?: IProduct[]
}

interface IAuthStore {
  user: IUser | null
  loading: boolean
  accessToken: string | null
  login: (credentials: ICredentials) => Promise<IResponse>
  logout: () => void
  register: (registerData: IUserRegister) => Promise<IResponse>
  updateUser: (id:string, updateData:IUserUpdate) => Promise<IResponse>
  preload: () => Promise<IResponse>
}

interface IProductStore {
  products: IProduct[] | null
  loading: boolean
  fetchProduct: () => Promise<IResponse>
}

export type {
  IProduct,
  IUserRegister,
  IUserUpdate,
  ICredentials,
  IResponse,
  IAuthStore,
  IProductStore,
  IUser,
};
