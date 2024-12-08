import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/componentStyle/HeaderComponent';
import textContent from '../lang/bidCardText.json';
interface HeaderProps {
  iconSource: any;
  label: string;
  progressSegments: number;
  completedSegments: number;
}
const HeaderComponent: React.FC<HeaderProps> = ({
  iconSource,
  label,
  progressSegments,
  completedSegments,
}) => {
  const renderSegments = () => {
    return Array.from({length: progressSegments}).map((_, index) => (
      <View
        key={index}
        style={[
          styles.progressSegment,
          index < completedSegments
            ? styles.activeSegment
            : styles.inactiveSegment,
        ]}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/image/LogoHomePage.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.rightIcons}>
          <View style={styles.viewCoconut}>
            <Text style={styles.counterText}>
              {textContent.header.coconutCount}
            </Text>
            <Image
              source={require('../../assets/image/coconut.png')}
              resizeMode="contain"
            />
          </View>
          <Image
            source={require('../../assets/image/Separation.png')}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/image/user-circle.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.viewProgress}>
        <View style={styles.progressBar}>{renderSegments()}</View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{label}</Text>
        <Image source={iconSource} style={styles.icon} />
      </View>
    </View>
  );
};
export default HeaderComponent;
