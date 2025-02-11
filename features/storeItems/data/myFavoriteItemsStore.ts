import { create } from 'zustand';
import { getMyFavoriteItems } from '@/features/storeItems/data/myFavoriteItemsApi';
import { MyFavoriteItemsState } from '../domain/MyFavoriteItemsState';

const initialState: MyFavoriteItemsState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  fetchFavoriteItems: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const useMyFavoriteItemsData = create<MyFavoriteItemsState>(
  (set, get) => ({
    ...initialState,

    fetchFavoriteItems: async () => {
      set({ loading: true });
      try {
        const res = await getMyFavoriteItems();
        set({ loading: false, success: true, data: res });
      } catch (err: any) {
        set({
          loading: false,
          success: false,
          error: true,
          errorData: err.message,
        });
      }
    },
  })
);
