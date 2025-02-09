import AnimalList from '@/components/AnimalList';
import ButtonList from '@/components/ButtonList';
import MyFavoriteItems from '@/features/storeItems/presentation/MyFavoriteItems';
import MyFriendList from '@/features/myFriends/presentation/MyFriendList';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Welcome back</Text>
        <ButtonList />
        <Text style={styles.headerText}>What furry friend brought you here today?</Text>
        <AnimalList />
        <Text style={styles.headerText}>Your favorites</Text>
        <MyFavoriteItems />
        <Image source={require('../assets/images/pet_insurance.png')} style={styles.ad} />
        <Text style={styles.headerText}>Your furry friends</Text>
        <MyFriendList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginTop: 4,
  },
  ad: {
    width: '100%',
    height: 270,
    flex: 1,
    resizeMode: 'contain',
  },
});
