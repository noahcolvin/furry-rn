import { create } from 'zustand';
import { MyFriendState } from '../domain/MyFriendState';
import { getMyFriends } from './myFriendsApi';

const initialState: MyFriendState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  fetchMyFriends: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const useMyFriendData = create<MyFriendState>((set, get) => ({
  ...initialState,

  fetchMyFriends: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await getMyFriends();
      set({ ...initialState, success: true, data: res });
    } catch (err: any) {
      console.error('Error in data fetch:', err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));
