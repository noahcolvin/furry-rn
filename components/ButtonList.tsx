import { ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { router } from 'expo-router';

export default function ButtonList() {
  const buttons = [
    { id: 1, text: 'Shop', href: '/store' },
    { id: 2, text: "Today's Specials", href: '/specials' },
    { id: 3, text: 'Grooming', href: '/grooming' },
    { id: 4, text: 'Locations', href: '/locations' },
    { id: 5, text: 'Rescue', href: '/rescue' },
    { id: 6, text: 'Vet Finder', href: '/vet' },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {buttons.map(button => (
        <Button
          key={button.id}
          title={button.text}
          type="outline"
          onPress={() => { router.push(button.href as any);}}
          buttonStyle={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 30,
            paddingHorizontal: 20,
          }}
          containerStyle={{
            marginHorizontal: 5,
          }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
  },
});
