import { create } from 'zustand';
import { StoreItemState } from '@/features/storeItems/domain/StoreItemState';
import { getStoreItems } from './storeItemsApi';

const initialState: StoreItemState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  animal: null,
  product: null,
  search: null,
  errorData: null,
  fetchStoreItems: function ({
    animal,
    product,
    search,
  }: GetStoreItemsParams): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const useStoreItemData = create<StoreItemState>((set, get) => ({
  ...initialState,

  fetchStoreItems: async ({ animal, product, search }: GetStoreItemsParams) => {
    const currentState = get();

    const animalFilter = animal
      ? animal === 'all'
        ? null
        : animal
      : currentState.animal;
    const productFilter = product
      ? product === 'all'
        ? null
        : product
      : currentState.product;
    const searchFilter = search;
    console.log('searchFilter',searchFilter);

    set({
      loading: true,
      animal: animalFilter,
      product: productFilter,
      search: searchFilter,
    });
    try {
      const res = await getStoreItems({
        animal: animalFilter,
        product: productFilter,
        search: searchFilter,
      });
      set({ loading: false, success: true, data: res });
    } catch (err: any) {
      console.error('Error in data fetch:', err);
      set({
        loading: false,
        success: false,
        error: true,
        errorData: err.message,
      });
    }
  },
}));
