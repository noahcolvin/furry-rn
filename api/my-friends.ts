import { MyFriend } from '@/models/MyFriend';
import { apiClient } from './client';

export const getMyFriends = async (): Promise<MyFriend[]> => {
  const response = await apiClient('/my-friends');
  const json = (await response.json()) as any[];
  return json.map((friend: any) => ({
    name: friend.name,
    image: friend.image,
  }));
};
