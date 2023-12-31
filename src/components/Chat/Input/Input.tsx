import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../../../constants/colors';

export const Input = ({ onSendMessage }) => {
  const [input, setInput] = useState(null);

  const hints = [
    'What is air pollution?',
    'Can you guide me on signing a clean air petition?',
    'What small actions can I take to support cleaner air?',
    'What are the key points of recent air quality laws?',
    'How can individuals stay informed about air quality regulations?',
    'How does local industry contribute to air pollution?',
    "What's being done at the community level to improve air quality?",
  ];

  const handleSendMessage = (message: string) => {
    if (!message) {
      return;
    }

    onSendMessage(message);
    setInput(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.hintsWrapper} horizontal showsHorizontalScrollIndicator={false}>
        {hints.map((item, index) => (
          <Pressable style={styles.hintButton} key={index} onPress={() => handleSendMessage(item)}>
            <Text style={styles.hintText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.description}
          value={input}
          placeholder="Message"
          onChangeText={setInput}
          onSubmitEditing={() => input && handleSendMessage(input)}
        />
        <View style={styles.buttonWrapper}>
          <Pressable style={styles.button} hitSlop={20} onPress={() => input && handleSendMessage(input)}>
            <Image style={styles.buttonImage} source={require('../../../assets/icons/arrow-up.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  hintsWrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  hintButton: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
  },
  hintText: {
    fontFamily: 'Lato',
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
  inputArea: {
    height: 75,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    marginRight: 8,
    color: colors.text,
  },
  buttonWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
});
