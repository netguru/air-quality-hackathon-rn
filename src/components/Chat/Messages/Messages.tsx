import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../constants/colors';

export type MessageType = {
  user: 'user' | 'bot';
  message: string;
};

export const Messages = ({ messages }: { messages: MessageType[] | null }) => {
  const getUserImage = (userName: string) => {
    if (userName === 'user') {
      return require('../../../assets/icons/user.png');
    }

    return require('../../../assets/icons/bot.png');
  };

  const getUserName = (userName: string) => {
    if (userName === 'user') {
      return 'You';
    }

    return 'CAN bot';
  };

  return (
    <ScrollView style={styles.container}>
      {messages &&
        messages.map((item, index) => (
          <View style={styles.messageWrapper} key={index}>
            <View style={styles.messageImageWrapper}>
              <Image style={styles.messageImage} source={getUserImage(item.user)} />
            </View>
            <View style={styles.messageContentWrapper}>
              <Text style={styles.messageUser}>{getUserName(item.user)}</Text>
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
