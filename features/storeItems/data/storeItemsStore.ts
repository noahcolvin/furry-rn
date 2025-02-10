import { create } from 'zustand';
import { getMyFavoriteItems } from '@/features/storeItems/data/myFavoriteItemsApi';
import { StoreItemState } from '@/features/storeItems/domain/StoreItemState';
import { getStoreItems } from './storeItemsApi';

const initialState: StoreItemState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  animal: null,
  product: null,
  errorData: null,
  fetchStoreItems: function ({ animal, product }: GetStoreItemsParams): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const useStoreItemData = create<StoreItemState>((set, get) => ({
  ...initialState,

  fetchStoreItems: async ({ animal, product }: GetStoreItemsParams) => {
    const currentState = get();

    const animalFilter = animal ? (animal === 'all' ? null : animal) : currentState.animal;
    const productFilter = product ? (product === 'all' ? null : product) : currentState.product;

    set({
      loading: true,
      animal: animalFilter,
      product: productFilter,
    });
    try {
      const res = await getStoreItems({ animal: animalFilter, product: productFilter });
      set({ loading: false, success: true, data: res });
    } catch (err: any) {
      console.error('Error in data fetch:', err);
      set({ loading: false, success: false, error: true, errorData: err.message });
    }
  },
}));
