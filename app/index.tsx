import AnimalList from '@/components/AnimalList';
import ButtonList from '@/components/ButtonList';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Welcome back</Text>
        <ButtonList />
        <Text style={styles.headerText}>What furry friend brought you here today?</Text>
        <AnimalList />
        <Text style={styles.headerText}>Your favorites</Text>

        <Text style={styles.headerText}>Your furry friends</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
