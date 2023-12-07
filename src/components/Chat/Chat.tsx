import { Dimensions, StyleSheet, View } from 'react-native';

import { Input } from './Input/Input';
import { Messages } from './Messages/Messages';
import { colors } from '../../constants/colors';

const windowHeight = Dimensions.get('window').height;

export const Chat = () => {
  return (
    <View style={styles.container}>
      <Messages />
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight - 75,
  },
  text: {
    fontFamily: 'Lato',
    color: colors.text,
  },
});
