import { StoreItem } from './StoreItem';

export interface StoreItemState extends AsyncState {
  data: StoreItem[] | null;
  animal: string | null;
  product: string | null;
  fetchStoreItems: ({ animal, product }: GetStoreItemsParams) => Promise<void>;
}
