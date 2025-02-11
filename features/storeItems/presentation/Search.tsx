import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useStoreItemData } from '../data/storeItemsStore';
import { useEffect, useState } from 'react';

export default function Search() {
  const fetchStoreItems = useStoreItemData(state => state.fetchStoreItems);
  const search = useStoreItemData(state => state.search);
  const [text, setText] = useState('');

  useEffect(() => {
    setText(search ?? '');
  }, [search]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          style={styles.search}
          focusable={false}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <TouchableOpacity onPress={() => fetchStoreItems({ search: text })}>
          <FontAwesome5 name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexGrow: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 8,
  },
});
