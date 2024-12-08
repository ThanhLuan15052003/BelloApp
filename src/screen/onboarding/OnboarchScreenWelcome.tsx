import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import stylesOnboardingWelcome from '../../styles/onboarding/OnboarchScreenWelcome';
import useOnboardWelcome from '../../hooks/useOnboardWelcome';
interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: any;
  highlight: string;
}
const Onboarding: React.FC = () => {
  const {
    slides,
    currentIndex,
    flatListRef,
    handlePrev,
    handleNext,
    onScrollEnd,
  } = useOnboardWelcome();
  const renderSlide = ({item}: {item: Slide}) => (
    <View style={stylesOnboardingWelcome.slide}>
      <Image source={item.image} />
      <Text style={stylesOnboardingWelcome.title}>{item.title}</Text>
      <Text style={stylesOnboardingWelcome.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <View style={stylesOnboardingWelcome.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderSlide}
        ref={flatListRef}
        onMomentumScrollEnd={onScrollEnd}
      />
      <View style={stylesOnboardingWelcome.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              stylesOnboardingWelcome.dot,
              currentIndex === index && stylesOnboardingWelcome.activeDot,
            ]}
          />
        ))}
      </View>
      <View style={stylesOnboardingWelcome.navigation}>
        <TouchableOpacity onPress={handlePrev}>
          <View
            style={[
              stylesOnboardingWelcome.navButton,
              stylesOnboardingWelcome.disabled,
            ]}>
            <Image
              source={require('../.././../assets/image/arrow-turn-left.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <View style={stylesOnboardingWelcome.navButton}>
            <Image
              source={require('../.././../assets/image/arrow-right.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
