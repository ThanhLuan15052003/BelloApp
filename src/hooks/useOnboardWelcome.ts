import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../type/type';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useRef, useState} from 'react';
const useOnboardWelcome = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  interface Slide {
    id: string;
    title: string;
    subtitle: string;
    image: any;
    highlight: string;
  }
  const {width} = Dimensions.get('window');
  const slides: Slide[] = [
    {
      id: '1',
      title: 'Bienvenue sur',
      subtitle: "L'app d’enchère la plus folle !",
      image: require('./.././../assets/image/Illustration.png'),
      highlight: 'QOCOBELLO',
    },
    {
      id: '2',
      title: 'Fais des économies avec nos super offres',
      subtitle:
        'Retrouve tes produits préférés et des exclusivités que ne trouveras nulle part ailleurs.',
      image: require('./.././../assets/image/Illustrations.png'),
      highlight: '',
    },
    {
      id: '3',
      title: 'Participe à des enchères de folie',
      subtitle:
        'Tiens-toi prêt à miser n’importe où, n’importe quand avec des enchères à durée ultra-limitée.',
      image: require('./.././../assets/image/Illustrationse.png'),
      highlight: '',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<Slide>>(null);
  const handlePrev = () => {
    if (currentIndex === 0) {
      navigation.goBack();
    } else {
      flatListRef.current?.scrollToIndex({index: currentIndex - 1});
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('OnboardingNoCheckScreen');
    }
  };

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  return {
    slides,
    currentIndex,
    setCurrentIndex,
    flatListRef,
    handlePrev,
    handleNext,
    onScrollEnd,
  };
};
export default useOnboardWelcome;
