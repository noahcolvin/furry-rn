import { render } from '@testing-library/react-native';
import Friend from '../../../app/friend/[name]';
import { useMyFriendData } from '@/features/myFriends/data/myFriendsStore';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const mockText = (text: string) => <Text>{text}</Text>;

jest.mock('@/features/myFriends/data/myFriendsStore');
jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(),
}));
jest.mock(
  '@/features/myFriends/presentation/MyFriendDetail',
  () => () => mockText('MyFriendDetail')
);

describe('Friend', () => {
  it('renders MyFriendDetail when myFriend.success is true', () => {
    const mockFriend = {
      name: 'John Doe',
      age: 30,
      description: 'A good friend',
    };
    (useLocalSearchParams as jest.Mock).mockReturnValue({ name: 'John Doe' });
    (useMyFriendData as unknown as jest.Mock).mockReturnValue({
      success: true,
      data: [mockFriend],
    });

    const { getByText } = render(<Friend />);

    // Check if MyFriendDetail component is rendered
    expect(getByText('MyFriendDetail')).toBeTruthy();
  });

  it('does not render MyFriendDetail when myFriend.success is false', () => {
    (useLocalSearchParams as jest.Mock).mockReturnValue({ name: 'John Doe' });
    (useMyFriendData as unknown as jest.Mock).mockReturnValue({
      success: false,
      data: [],
    });

    const { queryByText } = render(<Friend />);

    // Check if MyFriendDetail component is not rendered
    expect(queryByText('MyFriendDetail')).toBeNull();
  });
});
