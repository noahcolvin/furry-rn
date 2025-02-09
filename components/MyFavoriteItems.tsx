import { useStoreItemData } from '@/zustand/itemStore';
import { LinearProgress } from '@rneui/base';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function MyFavoriteItems() {
  const getStoreItemData = useStoreItemData();

  useEffect(() => {
    getStoreItemData.fetchFavorites();
  }, []);

  return (
    <>
      {getStoreItemData.loading && <LinearProgress style={{ width: '80%', marginHorizontal: 'auto', marginVertical: 10 }} />}
      {getStoreItemData.success && (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {getStoreItemData.data?.map(item => (
            <Link
              key={item.name}
              href={{
                pathname: '/item/[id]',
                params: { id: item.id },
              }}
              style={styles.storeLink}
            >
              <View style={styles.storeItem}>
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
            </Link>
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  storeLink: {
    margin: 5,
  },
  storeItem: {
    width: 202,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start',

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
