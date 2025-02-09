import { Text, View, Image, StyleSheet, LayoutChangeEvent } from 'react-native';
import { MyFriend } from '../domain/MyFriend';
import { useEffect, useState } from 'react';

export default function MyFriendDetail({ friend }: { friend: MyFriend }) {
  const [imageHeight, setImageHeight] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(
      friend.image,
      (width, height) => {
        setImageHeight(containerDimensions.width * (height / width));
      },
      error => {
        console.error('Error getting image size:', error);
      }
    );
  }, [friend, containerDimensions]);

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerDimensions({ width, height });
  };

  return (
    <>
      <View style={styles.imageContainer} onLayout={handleContainerLayout}>
        <Image
          source={{ uri: friend.image }}
          style={[
            styles.image,
            {
              width: containerDimensions.width - styles.imageContainer.borderWidth * 2,
              height: imageHeight,
            },
          ]}
        />
      </View>
      <Text style={styles.name}>{friend.name}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  imageContainer: { borderColor: '#ccc', borderRadius: 20, borderWidth: 1 },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
