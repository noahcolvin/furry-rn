import { Stack } from 'expo-router';
import { Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import CartIcon from '@/features/cart/presentation/CartIcon';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: '',
          headerLeft: () => <Image source={require('../assets/images/header_logo.png')} style={{ width: 120, height: 40, marginLeft: 0 }} />,
          headerRight: () => <CartIcon />,
        }}
      />
      <Stack.Screen
        name="item/[id]"
        options={{
          title: 'Item Details',
          headerRight: () => <CartIcon />,
        }}
      />
      <Stack.Screen
        name="friend/[name]"
        options={{
          title: 'My Friend',
        }}
      />
      <Stack.Screen
        name="store"
        options={{
          title: 'Store',
          headerRight: () => <CartIcon />,
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          title: 'Cart',
        }}
      />
      <Stack.Screen
        name="+not-found"
        options={{
          title: 'Not Available',
        }}
      />
    </Stack>
  );
}
