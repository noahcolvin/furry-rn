import AnimalDropdown from '@/features/storeItems/presentation/AnimalDropdown';
import ProductDropdown from '@/features/storeItems/presentation/ProductDropdown';
import Search from '@/features/storeItems/presentation/Search';
import StoreItemColumns from '@/features/storeItems/presentation/StoreItemColumns';
import { View, StyleSheet } from 'react-native';

export default function Store() {
  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.dropdownContainer}>
        <AnimalDropdown />
        <ProductDropdown />
      </View>
      <StoreItemColumns />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
