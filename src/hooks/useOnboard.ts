import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../type/type';
const useOnboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNavigate = () => {
    navigation.navigate('LoginScreen');
  };
  return {handleNavigate};
};
export default useOnboard;
