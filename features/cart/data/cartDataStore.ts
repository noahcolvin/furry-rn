import { create } from 'zustand';
import { CartState } from '../domain/cartState';
import { Cart } from '../domain/cart';
import { StoreItem } from '@/features/storeItems/domain/StoreItem';

const initialState: CartState = {
  data: new Cart(),
  errorData: null,
  addToCart: function (item: StoreItem): void {
    throw new Error('Function not implemented.');
  },
  removeFromCart: function (item: StoreItem): void {
    throw new Error('Function not implemented.');
  },
  clearCart: function (): void {
    throw new Error('Function not implemented.');
  },
};

export const useCartData = create<CartState>((set, get) => ({
  ...initialState,

  addToCart: (item: StoreItem) => {
    try {
      const data = get().data;
      const newItems = new Map(data.items);
      newItems.set(item, (newItems.get(item) || 0) + 1);
      set({ data: new Cart(newItems) });
    } catch (err: any) {
      console.error('Error in adding to cart:', err);
      set({ errorData: err.message });
    }
  },

  removeFromCart: (item: StoreItem) => {
    try {
      const data = get().data;
      const newItems = new Map(data.items);
      const count = newItems.get(item);
      if (count && count > 1) {
        newItems.set(item, count - 1);
      } else {
        newItems.delete(item);
      }
      set({ data: new Cart(newItems) });
    } catch (err: any) {
      console.error('Error in removal:', err);
      set({ errorData: err.message });
    }
  },

  clearCart: () => {
    set({ data: new Cart() });
  },
}));
