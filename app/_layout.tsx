import { Stack } from 'expo-router';
import { Image } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: '',
          headerLeft: () => <Image source={require('../assets/images/header_logo.png')} style={{ width: 120, height: 40, marginLeft: 0 }} />,
        }}
      />
      <Stack.Screen
        name="item/[id]"
        options={{
          title: 'Item Details',
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
        }}
      />
    </Stack>
  );
}
