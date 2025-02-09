import { create } from 'zustand';
import { getMyFavoriteItems } from '@/features/storeItems/data/myFavoriteItemsApi';
import { StoreItemState } from '@/features/storeItems/domain/StoreItemState';

const initialState: StoreItemState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  fetchFavorites: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const useStoreItemData = create<StoreItemState>((set, get) => ({
  ...initialState,

  fetchFavorites: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await getMyFavoriteItems();
      set({ ...initialState, success: true, data: res });
    } catch (err: any) {
      console.error('Error in data fetch:', err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));
