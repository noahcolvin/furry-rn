import { render } from '@testing-library/react-native';
import Index from '../../app/index';
import { Text } from 'react-native';

const mockText = (text: string) => <Text>{text}</Text>;

jest.mock(
  '@/features/dashboard/presentation/AnimalList',
  () => () => mockText('AnimalList')
);
jest.mock(
  '@/features/dashboard/presentation/ButtonList',
  () => () => mockText('ButtonList')
);
jest.mock(
  '@/features/storeItems/presentation/MyFavoriteItems',
  () => () => mockText('MyFavoriteItems')
);
jest.mock(
  '@/features/myFriends/presentation/MyFriendList',
  () => () => mockText('MyFriendList')
);

describe('Index', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<Index />);

    // Check if the welcome text is rendered
    expect(getByText('Welcome back')).toBeTruthy();

    // Check if ButtonList component is rendered
    expect(getByText('ButtonList')).toBeTruthy();

    // Check if the furry friend text is rendered
    expect(getByText('What furry friend brought you here today?')).toBeTruthy();

    // Check if AnimalList component is rendered
    expect(getByText('AnimalList')).toBeTruthy();

    // Check if the favorites text is rendered
    expect(getByText('Your favorites')).toBeTruthy();

    // Check if MyFavoriteItems component is rendered
    expect(getByText('MyFavoriteItems')).toBeTruthy();

    // Check if the ad image is rendered
    expect(getByTestId('ad-image')).toBeTruthy();

    // Check if the furry friends text is rendered
    expect(getByText('Your furry friends')).toBeTruthy();

    // Check if MyFriendList component is rendered
    expect(getByText('MyFriendList')).toBeTruthy();
  });
});
