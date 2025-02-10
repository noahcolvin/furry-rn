import { StoreItem } from '@/features/storeItems/domain/StoreItem';
import { apiClient } from '../../../shared/data/client';

export const getStoreItems = async ({ animal, product }: GetStoreItemsParams = {}): Promise<StoreItem[]> => {
  const params = new URLSearchParams();
  if (animal) params.append('animal', animal);
  if (product) params.append('product', product);

  const response = await apiClient('/items', params);
  const json = (await response.json()) as any[];

  return json.map((item: any) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    description: item.description,
    rating: item.rating,
    image: item.image,
    about: item.about,
    categories: item.categories,
  }));
};
