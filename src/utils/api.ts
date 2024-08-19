/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { getCookie } from 'typescript-cookie';
import {
  IUserUpdate, IUserRegister, ICredentials, IProduct, IResponse,
} from '../types/types';
import getErrorMessage from './error';

const baseUrl = 'http://localhost:8000';

function getAccessToken() {
  const token = JSON.parse(getCookie('auth') as string);
  return token.state.accessToken as string;
}

function fetchWithToken(method:'get' | 'post' | 'delete', url?:string, data:any = {}) {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function register(registerData: IUserRegister) {
  try {
    const response:AxiosResponse<IResponse> = await axios.post(`${baseUrl}/api/user/register`, registerData);
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function updateUser(id:string, updateData:IUserUpdate) {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('post', `/api/user/update/${id}`, updateData);
    const { message, success }:IResponse = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function login(loginData:ICredentials) {
  try {
    const response:AxiosResponse<IResponse> = await axios.post(`${baseUrl}/api/auth/login`, loginData);
    const { message, success, data }:IResponse = response.data;
    if (success) {
      return { message, success, token: data.token };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function getAuthUser() {
  try {
    // const response:AxiosResponse<IResponse> = await fetchWithToken('get', '/api/auth/me');
    const response = await fetchWithToken('get', '/api/auth/me');
    // const { message, success } = response.data;
    // if (success) {
    //   return { message, success };
    // }
    // throw new Error(message);
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function logout() {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('post', '/api/auth/logout');
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function createProduct(productData:IProduct) {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('post', '/api/product/create', productData);
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function updateProduct(id:string, productData:IProduct) {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('post', `/api/product/update/${id}`, productData);
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function deleteProduct(id:string) {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('delete', `/api/product/delete/${id}`);
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function getAllProducts() {
  try {
    const response:AxiosResponse<IResponse> = await axios.get(`${baseUrl}/api/products/data`);
    const { message, success, product_data } = response.data;
    if (success) {
      return { message, success, products: product_data };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

// async function getSellerProducts() {
//   try {
//     const response:AxiosResponse<IResponse> = await axios.get(`${baseUrl}/api/product/data`);
//     const { message, success } = response.data;
//     if (success) {
//       return { message, success };
//     }
//     throw new Error(message);
//   } catch (error) {
//     const message = getErrorMessage(error);
//     return { message, success: false };
//   }
// }
// async function createReview() {
//   try {
//     const response:AxiosResponse<IResponse> = await axios.get(`${baseUrl}/api/product/data`);
//     const { message, success } = response.data;
//     if (success) {
//       return { message, success };
//     }
//     throw new Error(message);
//   } catch (error) {
//     const message = getErrorMessage(error);
//     return { message, success: false };
//   }
// }

// async function getProductReviews() {
//   try {
//     const response:AxiosResponse<IResponse> = await axios.get(`${baseUrl}/api/product/data`);
//     const { message, success } = response.data;
//     if (success) {
//       return { message, success };
//     }
//     throw new Error(message);
//   } catch (error) {
//     const message = getErrorMessage(error);
//     return { message, success: false };
//   }
// }

async function createWishlist(id:string) {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('post', `/api/wishlist/add/${id}`);
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function getWishlist() {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('get', '/api/wishlist/show');
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

async function deleteWishlist(id:string) {
  try {
    const response:AxiosResponse<IResponse> = await fetchWithToken('delete', `/api/wishlist/delete/${id}`);
    const { message, success } = response.data;
    if (success) {
      return { message, success };
    }
    throw new Error(message);
  } catch (error) {
    const message = getErrorMessage(error);
    return { message, success: false };
  }
}

export {
  getAccessToken,
  register,
  updateUser,
  login,
  getAuthUser,
  logout,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  createWishlist,
  getWishlist,
  deleteWishlist,
};
