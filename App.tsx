import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { Chat } from './src/components/Chat/Chat';
import { Map } from './src/components/Map/Map';
import { Video } from './src/components/Video/Video';
import { colors } from './src/constants/colors';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Lato: require('./src/assets/fonts/Lato-Regular.ttf'),
    Raleway: require('./src/assets/fonts/Raleway-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <Chat />
        <Text style={{ color: '#fff' }}>Hello</Text>
        <Map />
        <Text style={styles.header}>Thailand Air Quality</Text>
        <Text style={styles.text}>Air Quality is important. Watch video.</Text>
        <Video />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: 'Lato',
    color: colors.text,
  },
  header: {
    fontFamily: 'Lato',
    color: colors.text,
    fontSize: 32,
  },
});
