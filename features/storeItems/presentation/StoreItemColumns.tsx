import { useEffect } from 'react';
import { useStoreItemData } from '../data/storeItemsStore';
import { StoreItem } from '../domain/StoreItem';
import StoreItemListing from './StoreItemListing';
import { FlatList } from 'react-native';

export default function StoreItemColumns() {
  const storeItemData = useStoreItemData(state => state.data);
  const fetchStoreItems = useStoreItemData(state => state.fetchStoreItems);

  useEffect(() => {
    fetchStoreItems();
  }, []);

  const renderItem = ({ item }: { item: StoreItem }) => <StoreItemListing item={item} />;

  return <FlatList data={storeItemData} renderItem={renderItem} numColumns={2} keyExtractor={(item, index) => index.toString()} />;
}
