import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colors';

export const Header = () => {
  const [value, setValue] = useState(0);

  const goal = 100000;

  const getSupportersValue = async () => {
    const url = 'https://thailandcan.org/api/petition';

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    setValue(data.times);
  };

  getSupportersValue();

  const getScaleWidth = () => {
    if (value >= goal) {
      return 100;
    }

    return (value / goal) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.supportersText}>
          {value}
          <Text style={styles.label}> supporters</Text>
        </Text>
        <Text style={styles.goalText}>
          {goal}
          <Text style={styles.label}> our goal</Text>
        </Text>
      </View>
      <View style={styles.scaleBackground}>
        <View style={[styles.scale, { width: `${getScaleWidth()}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    padding: 16,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  supportersText: {
    fontFamily: 'Raleway',
    color: colors.text,
  },
  goalText: {
    fontFamily: 'Raleway',
    color: colors.description,
  },
  label: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  scaleBackground: {
    width: '100%',
    height: 6,
    marginTop: 16,
    backgroundColor: colors.description,
    borderRadius: 16,
  },
  scale: {
    width: 0,
    height: '100%',
    backgroundColor: colors.tertiary,
    borderRadius: 16,
  },
});
