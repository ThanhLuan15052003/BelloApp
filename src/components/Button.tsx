import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import stylesOnboard from '../styles/onboarding/OnboardingScreen';

interface ButtonProps {
  onPress: () => void;
  text: string;
  imageSource: any;
}

const Button: React.FC<ButtonProps> = ({onPress, text, imageSource}) => (
  <TouchableOpacity style={stylesOnboard.button} onPress={onPress}>
    <Image source={imageSource} />
    <Text style={stylesOnboard.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
