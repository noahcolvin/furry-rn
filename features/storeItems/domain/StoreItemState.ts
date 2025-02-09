import { StoreItem } from "./StoreItem";

export interface StoreItemState extends AsyncState {
  data: StoreItem[] | null;
  fetchFavorites: () => Promise<void>;
}