
import {
  StyleSheet,
  Dimensions,
} from 'react-native';


const {width} = Dimensions.get('window');

const stylesOnboardingWelcome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121639',
  },
  slide: {
    width,
    padding: 20,
  },
  title: {
    paddingTop: 24,
    paddingLeft: 24,
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 44,
  },
  subtitle: {
    paddingTop: 20,
    paddingLeft: 24,
    fontSize: 14,
    color: '#AAA',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FFF',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  navButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4ABF40',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#121639',

  },
});

export default stylesOnboardingWelcome;
