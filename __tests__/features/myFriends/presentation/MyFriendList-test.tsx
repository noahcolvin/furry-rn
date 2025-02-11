import { render, waitFor } from '@testing-library/react-native';
import MyFriendList from '../../../../features/myFriends/presentation/MyFriendList';
import { useMyFriendData } from '../../../../features/myFriends/data/myFriendsStore';

jest.mock('../../../../features/myFriends/data/myFriendsStore');
jest.mock('expo-router', () => ({
  Link: ({ children }: { children: any }) => children,
}));

describe('MyFriendList', () => {
  const mockFetchMyFriends = jest.fn();
  const mockFriendData = {
    fetchMyFriends: mockFetchMyFriends,
    data: [
      { name: 'John Doe', image: 'https://example.com/john.jpg' },
      { name: 'Jane Doe', image: 'https://example.com/jane.jpg' },
    ],
  };

  beforeEach(() => {
    (useMyFriendData as unknown as jest.Mock).mockReturnValue(mockFriendData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches friends on mount', async () => {
    render(<MyFriendList />);

    await waitFor(() => {
      expect(mockFetchMyFriends).toHaveBeenCalled();
    });
  });

  it('renders friends correctly', () => {
    const { getByText, getAllByTestId } = render(<MyFriendList />);

    // Check if friend names are rendered
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Doe')).toBeTruthy();

    // Check if images are rendered
    const images = getAllByTestId('friend-image');
    expect(images.length).toBe(2);
  });
});
