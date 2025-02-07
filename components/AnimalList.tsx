import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function AnimalList() {
  const items = [
    { id: 1, color: 'red', text: 'Item 1' },
    { id: 2, color: 'blue', text: 'Item 2' },
    { id: 3, color: 'green', text: 'Item 3' },
    { id: 4, color: 'red', text: 'Item 1' },
    { id: 5, color: 'blue', text: 'Item 2' },
    { id: 6, color: 'green', text: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {items.map(item => (
        <View key={item.id} style={[styles.item, { backgroundColor: item.color }]}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  item: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
