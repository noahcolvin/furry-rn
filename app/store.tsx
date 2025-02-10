import AnimalDropdown from '@/features/storeItems/presentation/AnimalDropdown';
import ProductDropdown from '@/features/storeItems/presentation/ProductDropdown';
import StoreItemColumns from '@/features/storeItems/presentation/StoreItemColumns';
import { View, StyleSheet } from 'react-native';

export default function Store() {
  return (
    <>
      <View style={styles.dropdownContainer}>
        <AnimalDropdown />
        <ProductDropdown />
      </View>
      <StoreItemColumns />
    </>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
