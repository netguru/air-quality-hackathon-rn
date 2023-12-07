import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { Chat } from './src/components/Chat/Chat';
import { Map } from './src/components/Map/Map';
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
      <ScrollView automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false} bounces={false}>
        <Chat />
        <Map />
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
});
