import { getMyFavoriteItems } from '@/api/my-favorite-items';
import { StoreItem } from '@/models/StoreItem';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function MyFavoriteItems() {
  const [items, setItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    getMyFavoriteItems().then(friends => setItems(friends));
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {items.map(item => (
        <View key={item.name} style={styles.storeItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
          <Text style={styles.price} numberOfLines={1}>{`$${item.price}`}</Text>

          <StarRatingDisplay starSize={16} rating={item.rating} style={styles.stars} starStyle={styles.starStyle} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  storeItem: {
    width: 202,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start',
    margin: 5,
    borderColor: '#ccc',
    borderRadius: 20,
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 5,
  },
  description: {
    fontSize: 14,
    margin: 5,
    minHeight: 50,
  },
  price: {
    fontSize: 13,
    margin: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 5,
    textTransform: 'capitalize',
  },
  stars: {
    margin: 5,
  },
  starStyle: {
    marginHorizontal: 2,
    marginLeft: 0,
  },
});
