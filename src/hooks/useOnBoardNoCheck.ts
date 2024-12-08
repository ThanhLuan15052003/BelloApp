import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../type/type';
import {useState} from 'react';
import {Alert} from 'react-native';
const useOnboardNoCheck = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleConfirm = () => {
    if (isChecked) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert(
        'Attention',
        'Veuillez accepter les conditions avant de continuer',
      );
    }
  };
  return {
    isChecked,
    setIsChecked,
    navigation,
    handleConfirm,
  };
};
export default useOnboardNoCheck;
