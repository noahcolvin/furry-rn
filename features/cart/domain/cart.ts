import { StoreItem } from '@/features/storeItems/domain/StoreItem';

export class Cart {
  items: Map<StoreItem, number> = new Map();

  constructor(items?: Map<StoreItem, number>) {
    if (items) {
      this.items = items;
    }
  }
}
