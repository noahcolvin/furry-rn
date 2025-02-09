import { MyFriend } from './MyFriend';

export interface MyFriendState extends AsyncState {
  data: MyFriend[] | null;
  fetchMyFriends: () => Promise<void>;
}
