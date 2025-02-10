import { useStoreItemData } from '@/features/storeItems/data/storeItemsStore';
import StoreItemDetail from '@/features/storeItems/presentation/StoreItemDetail';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export default function Id() {
  const { id } = useLocalSearchParams();
  const { data, error } = useStoreItemData();
  const item = data?.find(item => item.id === id);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StoreItemDetail item={item!} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
  },
});
