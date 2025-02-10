import { useEffect } from 'react';
import { useStoreItemData } from '../data/storeItemsStore';
import { StoreItem } from '../domain/StoreItem';
import StoreItemListing from './StoreItemListing';
import { FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function StoreItemColumns() {
  const storeItemData = useStoreItemData(state => state.data);
  const fetchStoreItems = useStoreItemData(state => state.fetchStoreItems);

  const { animal: animalParam, product: productParam }: { animal: string; product: string } = useLocalSearchParams();

  useEffect(() => {
    const animal = animalParam || 'all';
    const product = productParam || 'all';
    fetchStoreItems({ animal, product });
  }, []);

  const renderItem = ({ item }: { item: StoreItem }) => <StoreItemListing item={item} />;

  return <FlatList data={storeItemData} renderItem={renderItem} numColumns={2} keyExtractor={(item, index) => index.toString()} />;
}
