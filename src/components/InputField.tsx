import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import stylesLogin from '../styles/auth/LoginScreen';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  iconSource: any;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  iconSource,
  secureTextEntry = false,
}) => (
  <View>
    <Text  style={stylesLogin.label}>{label}</Text>
    <View style={stylesLogin.inputContainer}>
      <Image source={iconSource}  style={stylesLogin.icon} />
      <TextInput
        style={stylesLogin.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  </View>
);

export default InputField;
