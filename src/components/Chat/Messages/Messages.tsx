import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../constants/colors';

export type MessageType = {
  user: 'user' | 'bot';
  message: string;
};

const LoadingAnimation = ({ dotsCount }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < dotsCount ? prevDots + '.' : '.'));
    }, 250);

    return () => clearInterval(interval);
  }, [dotsCount]);

  return <Text style={styles.messageText}>{dots}</Text>;
};

const TypingText = ({
  initialText,
  isNewMessage,
  scrollHandler,
}: {
  initialText: string;
  isNewMessage: boolean;
  scrollHandler: () => void;
}) => {
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState('');

  const typeWriter = () => {
    if (currentIndex < initialText.length) {
      setCurrentLetter((prevLetter) => prevLetter + initialText.charAt(currentIndex));
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentLetter('');
      setCurrentIndex(0);
      setIsTypingFinished(true);
    }
  };

  useEffect(() => {
    if (isNewMessage) {
      const interval = setInterval(typeWriter, 5);
      return () => clearInterval(interval);
    }
  }, [currentIndex, initialText, isNewMessage]);

  useEffect(() => {
    if (!isTypingFinished) {
      const interval = setInterval(scrollHandler, 1000);
      return () => clearInterval(interval);
    }
  }, [isTypingFinished]);

  if (!isTypingFinished) {
    return <Text style={styles.messageText}>{currentLetter}</Text>;
  }

  return <Text style={styles.messageText}>{initialText}</Text>;
};

export const Messages = ({
  messages,
  isLoading,
  loadingMessageIndex,
}: {
  messages: MessageType[] | null;
  isLoading: boolean;
  loadingMessageIndex: number;
}) => {
  const scrollViewRef = useRef<ScrollView | null>(null);

  const scrollToEnd = () => {
    scrollViewRef.current.scrollToEnd();
  };

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

  const getMessage = (userName: string, message: string, index: number) => {
    if (userName === 'user') {
      return <Text style={styles.messageText}>{message}</Text>;
    }

    return (
      <TypingText initialText={message} isNewMessage={index === loadingMessageIndex} scrollHandler={scrollToEnd} />
    );
  };

  useEffect(() => {
    scrollToEnd();
  }, [messages]);

  const renderLoadingMessage = () => (
    <View style={styles.messageWrapper}>
      <View style={styles.messageImageWrapper}>
        <Image style={styles.messageImage} source={getUserImage('bot')} />
      </View>
      <View style={styles.messageContentWrapper}>
        <Text style={styles.messageUser}>{getUserName('bot')}</Text>
        <LoadingAnimation dotsCount={3} />
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      {messages &&
        messages.map((item, index) => (
          <View style={styles.messageWrapper} key={index}>
            <View style={styles.messageImageWrapper}>
              <Image style={styles.messageImage} source={getUserImage(item.user)} />
            </View>
            <View style={styles.messageContentWrapper}>
              <Text style={styles.messageUser}>{getUserName(item.user)}</Text>
              {getMessage(item.user, item.message, index)}
            </View>
          </View>
        ))}
      {isLoading && renderLoadingMessage()}
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
