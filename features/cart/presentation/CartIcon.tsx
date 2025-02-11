import { Badge } from '@rneui/themed';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useCartData } from '../data/cartDataStore';
import { router } from 'expo-router';
import { MainColor } from '@/shared/colors';

export default function CartIcon() {
  const cartData = useCartData(state => state.data);

  const itemCount = Array.from(cartData.items.values()).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <TouchableOpacity onPress={() => router.push('/cart')}>
      <View style={styles.container}>
        <Feather name="shopping-cart" size={20} color="black" />
        {itemCount > 0 && (
          <Badge
            status="error"
            badgeStyle={styles.badge}
            value={itemCount}
            containerStyle={styles.badgeContainer}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { width: 30, height: 30, position: 'relative' },
  badge: { backgroundColor: MainColor },
  badgeContainer: { position: 'absolute', bottom: 0, right: 0 },
});
