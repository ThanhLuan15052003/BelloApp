import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../type/type';
import {USER_DATA} from '../constants/constants';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
const useLogin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setErrorMessage('');

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (!trimmedEmail || !trimmedPassword) {
      setErrorMessage('Email and password cannot be empty.');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (trimmedPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    if (
      trimmedEmail !== USER_DATA.email ||
      trimmedPassword !== USER_DATA.password
    ) {
      setErrorMessage('Incorrect email or password. Please try again.');
      return;
    }
    Toast.show({
      type: 'success',
      text1: 'Login Successful',
    });
    navigation.navigate('Onboarding');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return {
    navigation,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    passwordVisible,
    setPasswordVisible,
    handleLogin,
    handleGoBack,
  };
};
export default useLogin;
