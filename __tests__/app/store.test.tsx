import { render } from '@testing-library/react-native';
import Store from '../../app/store';
import { Text } from 'react-native';

const mockText = (text: string) => <Text>{text}</Text>;

jest.mock(
  '@/features/storeItems/presentation/AnimalDropdown',
  () => () => mockText('AnimalDropdown')
);
jest.mock(
  '@/features/storeItems/presentation/ProductDropdown',
  () => () => mockText('ProductDropdown')
);
jest.mock(
  '@/features/storeItems/presentation/Search',
  () => () => mockText('Search')
);
jest.mock(
  '@/features/storeItems/presentation/StoreItemColumns',
  () => () => mockText('StoreItemColumns')
);

describe('Store', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Store />);

    // Check if Search component is rendered
    expect(getByText('Search')).toBeTruthy();

    // Check if AnimalDropdown component is rendered
    expect(getByText('AnimalDropdown')).toBeTruthy();

    // Check if ProductDropdown component is rendered
    expect(getByText('ProductDropdown')).toBeTruthy();

    // Check if StoreItemColumns component is rendered
    expect(getByText('StoreItemColumns')).toBeTruthy();
  });
});
