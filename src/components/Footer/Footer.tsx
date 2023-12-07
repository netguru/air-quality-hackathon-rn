import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/colors';

const netguruLink = 'https://www.netguru.com/';

const socialLinks = [
  {
    link: 'https://www.facebook.com/thailandcleanairnetwork',
    iconSource: require('../../assets/icons/facebook.png'),
  },
  {
    link: 'https://www.linkedin.com/company/thailand-clean-air-network/',
    iconSource: require('../../assets/icons/linkedin.png'),
  },
  {
    link: 'https://www.youtube.com/@thailandcleanairnetwork',
    iconSource: require('../../assets/icons/youtube.png'),
  },
];

export const Footer = () => {
  const onLinkPress = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.followUsText}>Follow us</Text>
      <View style={styles.socialLinksWrapper}>
        {socialLinks.map((item, index) => (
          <Pressable style={styles.socialLinkButton} key={index} onPress={() => onLinkPress(item.link)}>
            <Image style={styles.socialLinkIcon} source={item.iconSource} />
          </Pressable>
        ))}
      </View>
      <Text style={styles.poweredByText}>Powered by</Text>
      <Pressable onPress={() => onLinkPress(netguruLink)}>
        <Image style={styles.poweredByIcon} source={require('../../assets/icons/netguru.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
  },
  followUsText: {
    paddingVertical: 16,
    fontSize: 24,
    fontFamily: 'Raleway',
    color: colors.text,
    textAlign: 'center',
  },
  socialLinksWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLinkButton: {
    padding: 8,
  },
  socialLinkIcon: {
    width: 48,
    height: 48,
  },
  poweredByText: {
    marginTop: 32,
    paddingVertical: 8,
    fontSize: 16,
    fontFamily: 'Lato',
    color: colors.text,
    textAlign: 'center',
  },
  poweredByIcon: {
    width: 132,
    resizeMode: 'contain',
  },
});
