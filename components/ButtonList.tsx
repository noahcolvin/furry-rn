import { ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function ButtonList() {
  const buttons = [
    { id: 1, text: 'Shop' },
    { id: 2, text: "Today's Specials" },
    { id: 3, text: 'Grooming' },
    { id: 4, text: 'Locations' },
    { id: 5, text: 'Rescue' },
    { id: 6, text: 'Vet Finder' },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {buttons.map(button => (
        <Button
          key={button.id}
          title={button.text}
          type="outline"
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
