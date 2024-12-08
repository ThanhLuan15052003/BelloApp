import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import content from '../../lang/content.json';
import stylesLogin from '../../styles/auth/LoginScreen';
import useLogin from '../../hooks/useLogin';
import InputField from '../../components/InputField';
const LoginScreen: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    passwordVisible,
    setPasswordVisible,
    handleLogin,
    handleGoBack,
  } = useLogin();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={stylesLogin.scrollViewContent}>
      <ScrollView
        contentContainerStyle={stylesLogin.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={stylesLogin.container}>
          <View style={stylesLogin.logoContainer}>
            <Image
              source={require('../.././../assets/image/Illustration.png')}
              resizeMode="contain"
            />
          </View>
          <View style={stylesLogin.viewImageTitle}>
            <Image
              source={require('../.././../assets/image/Title.png')}
              resizeMode="contain"
            />
          </View>
          <View style={stylesLogin.viewGroupButton}>
            <InputField
              label={content.labels.email}
              value={email}
              onChangeText={setEmail}
              placeholder={content.placeholders.email}
              iconSource={require('../.././../assets/image/envelope.png')}
            />
            <View style={stylesLogin.inputGroup}>
              <Text style={stylesLogin.label}>{content.labels.password}</Text>
              <View style={stylesLogin.inputContainer}>
                <Image
                  source={require('../.././../assets/image/key.png')}
                  style={stylesLogin.icon}
                />
                <TextInput
                  style={stylesLogin.input}
                  placeholder={content.placeholders.password}
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Image
                    source={
                      passwordVisible
                        ? require('../.././../assets/image/eye-slash.png')
                        : require('../.././../assets/image/eye-slash.png')
                    }
                    style={stylesLogin.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {errorMessage ? (
              <Text style={stylesLogin.errorText}>{errorMessage}</Text>
            ) : null}
            <View style={stylesLogin.buttonGroup}>
              <TouchableOpacity
                style={stylesLogin.backButton}
                onPress={handleGoBack}>
                <Image
                  source={require('../.././../assets/image/arrow-turn-left.png')}
                  style={stylesLogin.arrowIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={stylesLogin.createButton}
                onPress={handleLogin}>
                <Text style={stylesLogin.createButtonText}>
                  {content.buttons.createAccount}
                </Text>
                <Image
                  source={require('../.././../assets/image/arrow-right.png')}
                  style={stylesLogin.arrowIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
