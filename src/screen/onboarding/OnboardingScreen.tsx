import React from 'react';
import {View, Image} from 'react-native';
import content from '../../lang/content.json';
import stylesOnboard from '../../styles/onboarding/OnboardingScreen';
import useOnboard from '../../hooks/useOnboard';
import Button from '../../components/Button';
const OnboardingScreen: React.FC = () => {
  const {handleNavigate} = useOnboard();

  return (
    <View style={stylesOnboard.container}>
      <View style={stylesOnboard.logoContainer}>
        <Image source={require('../.././../assets/image/Illustration.png')} />
      </View>
      <View style={stylesOnboard.viewImageTitle}>
        <Image source={require('../.././../assets/image/Title.png')} />
      </View>
      <View style={stylesOnboard.viewGroupButton}>
        <Button
          onPress={() => {}}
          text={content.buttons.connectWithGoogle}
          imageSource={require('../.././../assets/image/G.png')}
        />
        <View style={stylesOnboard.viewBorder}>
          <View style={stylesOnboard.border} />
        </View>
        <Button
          onPress={handleNavigate}
          text={content.buttons.connectWithMail}
          imageSource={require('../.././../assets/image/envelope.png')}
        />
      </View>
    </View>
  );
};
export default OnboardingScreen;
