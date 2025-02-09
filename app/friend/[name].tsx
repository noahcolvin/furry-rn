import { useMyFriendData } from '@/features/myFriends/data/myFriendsStore';
import MyFriendDetail from '@/features/myFriends/presentation/MyFriendDetail';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export default function Friend() {
  const { name } = useLocalSearchParams();
  const myFriend = useMyFriendData();
  const friend = myFriend.data?.find(friend => friend.name === name);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {myFriend.success && <MyFriendDetail friend={friend!} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
  },
});
