import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { Chat } from './src/components/Chat/Chat';
import { Map } from './src/components/Map/Map';
import { Video } from './src/components/Video/Video';
import { Form } from './src/components/Form/Form';
import { colors } from './src/constants/colors';
import { Header } from './src/components/Header/Header';
import { Footer } from './src/components/Footer/Footer';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Lato: require('./src/assets/fonts/Lato-Regular.ttf'),
    Raleway: require('./src/assets/fonts/Raleway-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  return (
    <SafeAreaView style={styles.background}>
      <Header />
      <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={styles.container}>
        <Chat />
        <Text style={styles.header}>Breathing Easy - the dream.</Text>
        <Text style={styles.text}>
          As a young person living in Thailand, I understand the importance of air quality. Breathing clean air is not
          just about enjoying the outdoors, it's about my health and well-being. Poor air quality can lead to allergies,
          respiratory conditions, and even impact my learning and physical activities. By advocating for better air
          quality, I'm not just fighting for a cleaner environment, but also for a healthier future for myself and my
          peers. Join me in this mission to ensure a brighter future for all young people in Thailand.
        </Text>
        <Map />
        <Text style={styles.header}>
          Take a Stand for Clean Air: Sign the Petition for Better Air Quality in Thailand
        </Text>
        <Text style={styles.text}>
          Imagine a future where you breathe in clean, fresh air every day. By signing this petition, you're taking a
          stand for better air quality in Thailand. This isn't just about the environment, it's about your health, your
          cognitive function, and your ability to lead an active lifestyle. A law enforcing stricter air quality
          standards will directly impact your life, reducing your risk of respiratory issues and enhancing your overall
          well-being. Your signature is more than just ink on paper, it's a step towards a healthier, brighter future.
          Stand with us, make your mark, and let's create a better tomorrow together.
        </Text>
        <Video />
        <Form />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  container: {
    width: Platform.OS === 'web' ? 800 : 'auto',
    justifyContent: Platform.OS === 'web' ? 'center' : 'flex-start',
    alignItems: Platform.OS === 'web' ? 'center' : 'stretch',
  },
  text: {
    padding: 16,
    textAlign: 'center',
    fontFamily: 'Lato',
    color: colors.text,
  },
  header: {
    padding: 16,
    textAlign: 'center',
    fontFamily: 'Raleway',
    color: colors.text,
    fontSize: 32,
  },
});
