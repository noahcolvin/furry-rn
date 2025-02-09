import { create } from 'zustand';
import { getMyFavoriteItems } from '@/api/my-favorite-items';
import { StoreItem } from '@/models/StoreItem';

interface StoreItemState {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: StoreItem[] | null;
  errorData: string | null;
  fetchFavorites: () => Promise<void>;
}

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
