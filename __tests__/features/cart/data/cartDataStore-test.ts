import { useCartData } from '../../../../features/cart/data/cartDataStore';
import { StoreItem } from '@/features/storeItems/domain/StoreItem';
import { act, renderHook } from '@testing-library/react-native';
import { CartState } from '@/features/cart/domain/cartState';

describe('useCartData', () => {
  let store: React.MutableRefObject<CartState>;

  beforeEach(() => {
    const { result } = renderHook(() => useCartData());
    store = result;
  });

  it('should add an item to the cart', () => {
    const item: StoreItem = {
      id: '1',
      name: 'Item 1',
      price: 10,
      description: 'Description',
      rating: 5,
      image: 'image.jpg',
      about: [],
      categories: [],
    };
    act(() => store.current.addToCart(item));

    const cart = store.current.data;
    expect(cart.items.get(item)).toBe(1);
  });

  it('should increment the quantity of an existing item in the cart', () => {
    const item: StoreItem = {
      id: '1',
      name: 'Item 1',
      price: 10,
      description: 'Description',
      rating: 5,
      image: 'image.jpg',
      about: [],
      categories: [],
    };
    act(() => store.current.addToCart(item));
    act(() => store.current.addToCart(item));

    const cart = store.current.data;
    expect(cart.items.get(item)).toBe(2);
  });

  it('should remove an item from the cart', () => {
    const item: StoreItem = {
      id: '1',
      name: 'Item 1',
      price: 10,
      description: 'Description',
      rating: 5,
      image: 'image.jpg',
      about: [],
      categories: [],
    };
    act(() => store.current.addToCart(item));
    act(() => store.current.removeFromCart(item));

    const cart = store.current.data;
    expect(cart.items.get(item)).toBeUndefined();
  });

  it('should decrement the quantity of an existing item in the cart', () => {
    const item: StoreItem = {
      id: '1',
      name: 'Item 1',
      price: 10,
      description: 'Description',
      rating: 5,
      image: 'image.jpg',
      about: [],
      categories: [],
    };
    act(() => store.current.addToCart(item));
    act(() => store.current.addToCart(item));
    act(() => store.current.removeFromCart(item));

    const cart = store.current.data;
    expect(cart.items.get(item)).toBe(1);
  });

  it('should clear the cart', () => {
    const item: StoreItem = {
      id: '1',
      name: 'Item 1',
      price: 10,
      description: 'Description',
      rating: 5,
      image: 'image.jpg',
      about: [],
      categories: [],
    };
    act(() => store.current.addToCart(item));
    act(() => store.current.clearCart());

    const cart = store.current.data;
    expect(cart.items.size).toBe(0);
  });
});
