import { Text, View, StyleSheet } from 'react-native';
import { Cart } from '../domain/cart';

 const shipping = 4.95;
 const taxRate = 0.0725;

export default function CartSummary(props: { cart: Cart }) {
  const itemTotal = Array.from(props.cart.items.entries()).reduce((acc, [item, count]) => acc + item.price * count, 0);

  return (
    <View>
      <Text style={styles.title}>Order Details</Text>
      <View style={styles.lineItem}>
        <Text>Item total:</Text>
        <Text>${itemTotal.toFixed(2)}</Text>
      </View>
      <View style={styles.lineItem}>
        <Text>Shipping:</Text>
        <Text>${shipping}</Text>
      </View>
      <View style={styles.lineItem}>
        <Text>Tax:</Text>
        <Text>${(itemTotal * taxRate).toFixed(2)}</Text>
      </View>
      <View style={styles.lineItem}>
        <Text>Order total:</Text>
        <Text>${(itemTotal + shipping + itemTotal * taxRate).toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
});
