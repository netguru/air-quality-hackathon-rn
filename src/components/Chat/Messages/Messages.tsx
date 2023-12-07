import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../constants/colors';

export const Messages = () => {
  const messages = [
    {
      user: 'CAN bot',
      message: 'Hello, John! I’m your Clean Air AI Advocate. Ask me whatever you would like to know about',
    },
    {
      user: 'You',
      message: 'Hi!',
    },
  ];

  const getMessageImage = (userName: string) => {
    if (userName === 'You') {
      return require('../../../assets/icons/user.png');
    }

    return require('../../../assets/icons/bot.png');
  };

  return (
    <ScrollView style={styles.container}>
      {messages.map((item, index) => (
        <View style={styles.messageWrapper} key={index}>
          <View style={styles.messageImageWrapper}>
            <Image style={styles.messageImage} source={getMessageImage(item.user)} />
          </View>
          <View style={styles.messageContentWrapper}>
            <Text style={styles.messageUser}>{item.user}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  messageWrapper: {
    padding: 16,
    flexDirection: 'row',
  },
  messageImageWrapper: {
    paddingTop: 3,
    marginRight: 16,
  },
  messageImage: {
    width: 16,
    height: 16,
  },
  messageContentWrapper: {
    flex: 1,
  },
  messageUser: {
    marginBottom: 8,
    fontSize: 18,
    fontFamily: 'Raleway',
    color: colors.text,
  },
  messageText: {
    fontFamily: 'Lato',
    color: colors.text,
    fontSize: 16,
  },
});
