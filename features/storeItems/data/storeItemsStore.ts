import { create } from 'zustand';
import { getMyFavoriteItems } from '@/features/storeItems/data/myFavoriteItemsApi';
import { StoreItemState } from '@/features/storeItems/domain/StoreItemState';
import { getStoreItems } from './storeItemsApi';

const initialState: StoreItemState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  fetchStoreItems: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const useStoreItemData = create<StoreItemState>((set, get) => ({
  ...initialState,

  fetchStoreItems: async () => {
    set({ loading: true });
    try {
      const res = await getStoreItems();
      set({ loading: false, success: true, data: res });
    } catch (err: any) {
      console.error('Error in data fetch:', err);
      set({ loading: false, success: false, error: true, errorData: err.message });
    }
  },
}));
