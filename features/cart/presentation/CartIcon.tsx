import { Badge } from '@rneui/themed';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity, View } from 'react-native';
import { useCartData } from '../data/cartDataStore';
import { router } from 'expo-router';

export default function CartIcon() {
  const cartData = useCartData(state => state.data);

  const itemCount = Array.from(cartData.items.values()).reduce((total, count) => total + count, 0);

  return (
    <TouchableOpacity onPress={() => router.push('/cart')}>
      <View style={{ width: 30, height: 30, position: 'relative' }}>
        <Feather name="shopping-cart" size={20} color="black" />
        {itemCount > 0 && <Badge status="error" value={itemCount} containerStyle={{ position: 'absolute', bottom: 0, right: 0 }} />}
      </View>
    </TouchableOpacity>
  );
}
