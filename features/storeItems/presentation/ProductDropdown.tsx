import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useStoreItemData } from '../data/storeItemsStore';

const data = [
  { label: 'All', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Toys', value: 'toy' },
];

export default function ProductDropdown() {
  const [value, setValue] = useState('all');
  const [isFocus, setIsFocus] = useState(false);
  const fetchStoreItems = useStoreItemData(state => state.fetchStoreItems);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          fetchStoreItems({ product: item.value });
        }}
        renderLeftIcon={() => <FontAwesome5 name="store" size={20} color="black" style={styles.icon} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '45%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
