import { useCartData } from '@/features/cart/data/cartDataStore';
import CartItem from '@/features/cart/presentation/CartItem';
import CartSummary from '@/features/cart/presentation/CartSummary';
import { Button, Divider } from '@rneui/base';
import { router } from 'expo-router';
import { Text, StyleSheet, View, FlatList } from 'react-native';

export default function Cart() {
  const cartData = useCartData(state => state.data);
  const itemArray = Array.from(cartData.items.keys());

  const clearCart = useCartData(state => state.clearCart);

  console.log(itemArray.length);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Items</Text>
      <Divider />
      <FlatList data={itemArray} keyExtractor={(item, _) => item.id} renderItem={({ item }) => <CartItem item={item} count={cartData.items.get(item) ?? 0} />} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} />
      <Divider width={5} />
      <CartSummary cart={cartData} />
      <Button
        title="Complete Order"
        buttonStyle={{
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={() => {
          clearCart();
          router.replace('/');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  list: {
    flexGrow: 1,
  },
});
