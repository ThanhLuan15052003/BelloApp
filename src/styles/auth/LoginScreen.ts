import {StyleSheet} from 'react-native';
const stylesLogin = StyleSheet.create({
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
    paddingRight: 32,
    paddingLeft: 32,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A6A6A6',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#000000',
    fontSize: 14,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: '#2E3340',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4ABF40',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default stylesLogin;
