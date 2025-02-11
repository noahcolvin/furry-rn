import { ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { router } from 'expo-router';
import { MainColor } from '@/shared/colors';

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
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {buttons.map(button => (
        <Button
          key={button.id}
          title={button.text}
          type="outline"
          onPress={() => {
            router.push(button.href as any);
          }}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: { marginHorizontal: 5 },
  buttonTitle: { color: MainColor, marginHorizontal: 20 },
});
