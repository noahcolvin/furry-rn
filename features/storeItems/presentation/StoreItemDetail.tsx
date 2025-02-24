import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { StoreItem } from '../domain/StoreItem';
import { Image, LayoutChangeEvent, Text, View, StyleSheet } from 'react-native';
import { Button } from '@rneui/base';
import { useEffect, useState } from 'react';
import { useCartData } from '@/features/cart/data/cartDataStore';
import { MainColor } from '@/shared/colors';

export default function StoreItemDetail({ item }: { item: StoreItem }) {
  const [imageHeight, setImageHeight] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const addToCart = useCartData(state => state.addToCart);

  useEffect(() => {
    Image.getSize(
      item!.image,
      (width, height) => {
        setImageHeight(containerDimensions.width * (height / width));
      },
      error => {}
    );
  }, [item, containerDimensions]);

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerDimensions({ width, height });
  };

  return (
    <>
      <Text style={styles.title} numberOfLines={1}>
        {item?.name}
      </Text>
      <StarRatingDisplay
        starSize={16}
        rating={item?.rating ?? 0}
        style={styles.stars}
        starStyle={styles.starStyle}
      />
      <View style={styles.imageContainer} onLayout={handleContainerLayout}>
        <Image
          source={{ uri: item?.image }}
          style={[
            styles.image,
            {
              width:
                containerDimensions.width -
                styles.imageContainer.borderWidth * 2,
              height: imageHeight,
            },
          ]}
        />
      </View>
      <Text style={styles.price} numberOfLines={1}>{`$${item?.price}`}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {item?.description}
      </Text>
      <Button
        title="Add to Cart"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        onPress={() => addToCart(item)}
      />
      <Text style={styles.title} numberOfLines={1}>
        About
      </Text>
      {item?.about.map((about, index) => (
        <Text key={index} style={styles.about}>
          {`\u2022 ${about}`}
        </Text>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  imageContainer: { borderColor: '#ccc', borderRadius: 20, borderWidth: 1 },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  description: {
    fontSize: 16,
    margin: 5,
    minHeight: 50,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 5,
    textTransform: 'capitalize',
  },
  stars: {
    margin: 5,
  },
  starStyle: {
    marginHorizontal: 2,
    marginLeft: 0,
  },
  about: {
    fontSize: 15,
  },
  button: {
    backgroundColor: MainColor,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonTitle: { fontWeight: 'bold' },
});
