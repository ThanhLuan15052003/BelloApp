/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screen/onboarding/OnboardingScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import Onboarding from '../screen/onboarding/OnboarchScreenWelcome';
import OnboardingNoCheckScreen from '../screen/onboarding/OnboardingNoCheckScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import BidScreen from '../screen/bid/BidScreen';
import HistoryScreen from '../screen/history/HistoryScreen';
import ChargeScreen from '../screen/charge/ChargeScreen';
import AccountScreen from '../screen/account/AccountScreen';
import styles from '../styles/navigation/navigation';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Homestack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconImageSource;
          if (route.name === 'BidPage') {
            iconImageSource = focused
              ? require('../../assets/image/Nav-bid.png')
              : require('../../assets/image/Nav-bid.png');
          } else if (route.name === 'HistoryPage') {
            iconImageSource = focused
              ? require('../../assets/image/Nav-history-rounded.png')
              : require('../../assets/image/Nav-history.png');
          } else if (route.name === 'ChargePage') {
            iconImageSource = focused
              ? require('../../assets/image/Nav-shop-rounded.png')
              : require('../../assets/image/Nav-shop.png');
          } else if (route.name === 'AccountPage') {
            iconImageSource = focused
              ? require('../../assets/image/Nav-sccount_rounded.png')
              : require('../../assets/image/Nav-sccount.png');
          }

          return (
            <Image
              source={iconImageSource}
              style={[
                {
                  tintColor: focused ? styles.focused.tintColor : styles.unfocused.tintColor,
                },
              ]}
            />
          );
        },
        tabBarLabel: '',
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="BidPage" component={BidScreen} />
      <Tab.Screen name="HistoryPage" component={HistoryScreen} />
      <Tab.Screen name="ChargePage" component={ChargeScreen} />
      <Tab.Screen name="AccountPage" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OnboardingNoCheckScreen"
          component={OnboardingNoCheckScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={Homestack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
