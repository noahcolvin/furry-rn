import { getMyFriends } from '@/api/my-friends';
import { MyFriend } from '@/models/MyFriend';
import { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

export default function MyFriendList() {
  const [friends, setFriends] = useState<MyFriend[]>([]);

  useEffect(() => {
    getMyFriends().then(friends => setFriends(friends));
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {friends.map(friend => (
        <View key={friend.name} style={styles.animal}>
          <Image source={{ uri: friend.image }} style={styles.image} />
          <Text style={styles.text}>{friend.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  animal: {
    width: 200,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start',
    margin: 5,
    borderColor: '#ccc',
    borderRadius: 20,
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 100,
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
