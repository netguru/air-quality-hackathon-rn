import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../../../constants/colors';

export const Input = () => {
  const hints = ['What is air pollution?', 'How to sign in the petition?', 'What is CO2?'];

  const onSendMessage = async () => {
    const uri = 'http://195.201.198.36:8503/query';
    const body = JSON.stringify({ question: 'Hello! What is Thailand CAN?' });

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await response.json();

    console.log('response', data);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.hintsWrapper} horizontal>
        {hints.map((item, index) => (
          <Pressable style={styles.hintButton} key={index}>
            <Text style={styles.hintText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput style={styles.input} />
        <View style={styles.buttonWrapper}>
          <Pressable style={styles.button} hitSlop={20} onPress={onSendMessage}>
            <Image style={styles.buttonImage} source={require('../../../assets/icons/arrow-up.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  hintsWrapper: {},
  hintButton: {},
  hintText: {},
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
