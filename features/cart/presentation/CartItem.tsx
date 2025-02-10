import { useCartData } from '@/features/cart/data/cartDataStore';
import { StoreItem } from '@/features/storeItems/domain/StoreItem';
import { Button } from '@rneui/base';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function CartItem(props: { item: StoreItem; count: number }) {
  const { item, count } = props;

  const addToCart = useCartData(state => state.addToCart);
  const removeFromCart = useCartData(state => state.removeFromCart);

  return (
    <View key={item.id} style={styles.container}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.quantityGroup}>
          <Button title="-" type="outline" onPress={() => removeFromCart(item)} buttonStyle={styles.addMinusButton} containerStyle={styles.addMinusButtonContainer} />
          <Text>{count}</Text>
          <Button title="+" type="outline" onPress={() => addToCart(item)} buttonStyle={styles.addMinusButton} containerStyle={styles.addMinusButtonContainer} />
        </View>
      </View>
      <View>
        <Text>${(item.price * count).toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    resizeMode: 'cover',
  },
  middle: {
    flex: 1,
    marginHorizontal: 10,
  },
  quantityGroup: {
    flexDirection: 'row',
    flex: 1,

  },
  name: {
    fontSize: 14,
    flex: 1,
    marginBottom: 5,
  },
  addMinusButton: { borderWidth: 1, borderColor: '#cccccc', borderRadius: 50, padding: 1 },
  addMinusButtonContainer: {
    marginHorizontal: 10,
  },
});