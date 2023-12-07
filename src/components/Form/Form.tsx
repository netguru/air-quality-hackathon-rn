import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Form = () => {
  const { control, handleSubmit } = useForm();
  const { formSubmitted, setFormSubmitted } = React.useState(false);

  const onSubmit = async (formData) => {
    const uri = 'https://thailandcan.org/api/petition';
    const body = JSON.stringify({ email: formData.email, first_name: formData.firstname, last_name: formData.lastname, province: 'Bangkok' });

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const { data } = await response.json();
    setFormSubmitted(true)
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

        <TouchableOpacity disabled={formSubmitted} style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Sign petition</Text>
        </TouchableOpacity>
        {formSubmitted && <Text style={styles.text}>Petition send</Text>}
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
  text: {
    color: '#333'
  },
  header: {
    textAlign: 'center',
    color: '#202d64',
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 18,
  },
});
