import { Link } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { useMyFriendData } from '../data/myFriendsStore';

export default function MyFriendList() {
  const myFriendData = useMyFriendData();

  useEffect(() => {
    myFriendData.fetchMyFriends();
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {myFriendData.data?.map(friend => (
        <Link
          key={friend.name}
          href={{
            pathname: '/friend/[name]',
            params: { name: friend.name },
          }}
          style={styles.animalLink}
        >
          <View style={styles.animal}>
            <Image source={{ uri: friend.image }} style={styles.image} />
            <Text style={styles.text}>{friend.name}</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  animalLink: { margin: 5 },
  animal: {
    width: 200,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start',
    borderColor: '#ccc',
    borderRadius: 20,
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 150,
    borderColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'capitalize',
  },
});
