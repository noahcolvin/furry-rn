import { MyFriend } from '@/features/myFriends/domain/MyFriend';
import { apiClient } from '@/shared/data/client';

export const getMyFriends = async (): Promise<MyFriend[]> => {
  const response = await apiClient('/my-friends');
  const json = (await response.json()) as any[];

  return json.map((friend: any) => ({
    name: friend.name,
    image: friend.image,
  }));
};
