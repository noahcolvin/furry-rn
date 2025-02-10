import { StoreItem } from "./StoreItem";

export interface MyFavoriteItemsState extends AsyncState {
  data: StoreItem[] | null;
  fetchFavoriteItems: () => Promise<void>;
}