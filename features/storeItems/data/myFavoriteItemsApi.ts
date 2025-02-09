import { StoreItem } from '@/features/storeItems/domain/StoreItem';
import { apiClient } from '../../../shared/data/client';

export const getMyFavoriteItems = async (): Promise<StoreItem[]> => {
  const response = await apiClient('/my-favorite-items');
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
