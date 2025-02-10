import { StoreItem } from './StoreItem';

export interface StoreItemState extends AsyncState {
  data: StoreItem[] | null;
  fetchStoreItems: ({ animal, product }: GetStoreItemsParams) => Promise<void>;
}
