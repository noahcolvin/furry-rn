import { StoreItem } from '@/features/storeItems/domain/StoreItem';
import { Cart } from './cart';

export interface CartState {
  data: Cart;
  errorData: string | null;
  addToCart: (item: StoreItem) => void;
  removeFromCart: (item: StoreItem) => void;
  clearCart: () => void;
}
