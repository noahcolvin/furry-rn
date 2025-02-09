import { useStoreItemData } from '@/features/storeItems/data/myFavoriteItemsStore';
import { LinearProgress } from '@rneui/base';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import StoreItemListing from './StoreItemListing';

export default function MyFavoriteItems() {
  const getStoreItemData = useStoreItemData();

  useEffect(() => {
    getStoreItemData.fetchFavorites();
  }, []);

  return (
    <>
      {getStoreItemData.loading && <LinearProgress style={styles.progressBar} />}
      {getStoreItemData.success && (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {getStoreItemData.data?.map(item => (
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
