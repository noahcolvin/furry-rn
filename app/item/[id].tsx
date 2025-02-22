import { useStoreItemData } from '@/features/storeItems/data/storeItemsStore';
import StoreItemDetail from '@/features/storeItems/presentation/StoreItemDetail';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function Id() {
  const { id } = useLocalSearchParams();
  const { data, success, fetchStoreItems } = useStoreItemData();
  const itemId = parseInt(id as string, 10);
  const item = data?.find(item => item.id === itemId);

  useEffect(() => {
    if (!item) fetchStoreItems({ animal: 'all', product: 'all' });
  }, [item]);

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