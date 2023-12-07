import { Platform, View } from 'react-native';

export const Map = () => {
  if (Platform.OS === 'web') {
    // Use a basic custom layout on web.
    const link = "https://map.airgradient.com/?zoom=11&lat=13.722&long=100.524&org=ag";
    return (
      <div style={{ flex: 1 }}>
        <iframe width="425" height="350" src={link}></iframe><br/><small><a href={link}>View Larger Map</a></small>
      </div>
    );
  }
  // Use a native bottom tabs layout on native platforms.
  return (
    <View />
  );
}
