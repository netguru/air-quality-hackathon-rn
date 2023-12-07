import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Form = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Simulate form submission
    console.log('Submitted Data:', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Sign this petition</Text>
        <Controller
          control={control}
          render={({ field }) => <TextInput {...field} style={styles.input} placeholder="Your first name" />}
          name="firstname"
          rules={{ required: 'You must enter your name' }}
        />

        <Controller
          control={control}
          render={({ field }) => <TextInput {...field} style={styles.input} placeholder="Your last name" />}
          name="lastname"
          rules={{ required: 'You must enter your name' }}
        />

        <Controller
          control={control}
          render={({ field }) => <TextInput {...field} style={styles.input} placeholder="Email" />}
          name="email"
          rules={{
            required: 'You must enter your email',
            pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' },
          }}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Sign petition</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
  },
  wrapper: {
    padding: 16,

    backgroundColor: '#fff',
    borderRadius: 18,
  },
  input: {
    height: 40,
    borderColor: '#e6e6e8',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    color: '#333',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#3a58d6',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#202d64',
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 18,
  },
});
