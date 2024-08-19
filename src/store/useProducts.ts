import { create, StoreApi, UseBoundStore } from 'zustand';
import { IProductStore } from '../types/types';
import getErrorMessage from '../utils/error';
import { getAllProducts } from '../utils/api';

const useProducts: UseBoundStore<StoreApi<IProductStore>> = create((set) => ({
  products: null,
  loading: false,
  fetchProduct: async () => {
    try {
      set(() => ({ loading: true }));
      const { success, message, products } = await getAllProducts();
      if (!success) {
        throw new Error(message);
      }
      set(() => ({ products }));
      return { message, success: true };
    } catch (error) {
      const message = getErrorMessage(error);
      return { message, success: false };
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unsub = useProducts.subscribe(console.log);

export default useProducts;
