import { useStoreItemData } from '@/features/storeItems/data/storeItemsStore';
import StoreItemDetail from '@/features/storeItems/presentation/StoreItemDetail';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function Id() {
  const { id } = useLocalSearchParams();
  const { data, success, fetchStoreItems } = useStoreItemData();
  const item = data?.find(item => item.id === id);

  useEffect(() => {
    fetchStoreItems({animal: 'all', product: 'all'});
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {success && item && <StoreItemDetail item={item!} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
  },
});
