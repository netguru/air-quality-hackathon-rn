import { Platform, View } from 'react-native';

export const Video = () => {
  if (Platform.OS === 'web') {
    // Use a basic custom layout on web.
    const link = "https://map.airgradient.com/?zoom=11&lat=13.722&long=100.524&org=ag";
    return (
      <div style={{ flex: 1 }}>
        <video width={600} controls={true}><source src="https://www.dropbox.com/scl/fi/e400mo4d7wkgtjg30bjme/ThaiCAN-VDO-1.mp4?rlkey=r05qn1sahiimkechlkt355uxz&amp;raw=1" type="video/mp4"></source>Your browser does not support the video tag.</video>
      </div>
    );
  }
  // Use a native bottom tabs layout on native platforms.
  return (
    <View />
  );
}
