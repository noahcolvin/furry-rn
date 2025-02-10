import { LinearProgress } from '@rneui/base';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import StoreItemListing from './StoreItemListing';
import { useMyFavoriteItemsData } from '../data/myFavoriteItemsStore';

export default function MyFavoriteItems() {
  const favoriteItemData = useMyFavoriteItemsData();

  useEffect(() => {
    favoriteItemData.fetchFavoriteItems();
  }, []);

  return (
    <>
      {favoriteItemData.loading && <LinearProgress style={styles.progressBar} />}
      {favoriteItemData.success && (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {favoriteItemData.data?.map(item => (
            <StoreItemListing key={item.name} item={item} />
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
  progressBar: { width: '80%', marginHorizontal: 'auto', marginVertical: 10 },
});
