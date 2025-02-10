import { StoreItem } from "./StoreItem";

export interface StoreItemState extends AsyncState {
  data: StoreItem[] | null;
  fetchStoreItems: () => Promise<void>;
  fetchFavoriteItems: () => Promise<void>;
}