import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStoreItemData } from '../data/storeItemsStore';
import { useLocalSearchParams } from 'expo-router';

const data = [
  { label: 'All', value: 'all' },
  { label: 'Dog', value: 'dog' },
  { label: 'Cat', value: 'cat' },
  { label: 'Hamster', value: 'hamster' },
  { label: 'Snake', value: 'snake' },
  { label: 'Ferret', value: 'ferret' },
  { label: 'Fish', value: 'fish' },
];

export default function AnimalDropdown() {
  const { animal: animalParam }: { animal: string } = useLocalSearchParams();
  const [value, setValue] = useState(animalParam || 'all');
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
          fetchStoreItems({ animal: item.value });
        }}
        renderLeftIcon={() => (
          <FontAwesome name="paw" size={20} color="black" style={styles.icon} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 4,
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
