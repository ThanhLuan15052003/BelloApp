import {
  StyleSheet,
} from 'react-native';

const stylesOnboard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1E26',
  },
  logoContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewImageTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 32,
    paddingRight: 20,
  },
  viewGroupButton: {
    flexDirection: 'column',
    gap: 24,
    paddingTop: 24,
    paddingRight: 48,
    paddingLeft: 48,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
  },
  viewBorder: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  border: {
    height: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  mailButton: {
    backgroundColor: '#E1E1E1',
  },
});

export default stylesOnboard;
