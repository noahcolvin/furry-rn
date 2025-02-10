import { Link } from 'expo-router';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

export default function AnimalList() {
  const animals = [
    { id: 1, type: 'dog', image: require(`../assets/images/animal-types/dog.jpg`) },
    { id: 2, type: 'cat', image: require(`../assets/images/animal-types/cat.jpg`) },
    { id: 3, type: 'hamster', image: require(`../assets/images/animal-types/hamster.jpg`) },
    { id: 4, type: 'snake', image: require(`../assets/images/animal-types/snake.jpg`) },
    { id: 5, type: 'ferret', image: require(`../assets/images/animal-types/ferret.jpg`) },
    { id: 6, type: 'fish', image: require(`../assets/images/animal-types/fish.jpg`) },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {animals.map(animal => (
        <Link
          key={animal.id}
          href={{
            pathname: '/store',
            params: { animal: animal.type },
          }}
          style={styles.animalLink}
        >
          <View style={[styles.animal]}>
            <Image source={animal.image} style={styles.image} />
            <Text style={styles.text}>{animal.type}</Text>
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
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: '#ccc',
    borderRadius: 20,
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textTransform: 'capitalize',
  },
});
