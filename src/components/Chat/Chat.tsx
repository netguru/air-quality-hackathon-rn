import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Input } from './Input/Input';
import { MessageType, Messages } from './Messages/Messages';
import { colors } from '../../constants/colors';

const windowHeight = Dimensions.get('window').height;

export const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<MessageType[] | null>();

  const onSendMessage = async (message: string) => {
    setIsLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        user: 'user',
        message,
      },
    ]);

    const uri = 'http://195.201.198.36:8503/query';
    const body = JSON.stringify({ question: message });

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const { data } = await response.json();

    setMessages((prev) => [
      ...prev,
      {
        user: 'bot',
        message: data,
      },
    ]);

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(false);
    setMessages([
      {
        user: 'bot',
        message: 'Hello! I’m your Clean Air AI Advocate. Ask me whatever you like to know about',
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Messages messages={messages} isLoading={isLoading} loadingMessageIndex={messages && messages.length - 1} />
      <Input onSendMessage={onSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: windowHeight - 150,
  },
  text: {
    fontFamily: 'Lato',
    color: colors.text,
  },
});
