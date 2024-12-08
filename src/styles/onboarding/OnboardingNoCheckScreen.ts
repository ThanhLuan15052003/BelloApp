import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1D27',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 200,
    paddingBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 24,
    paddingLeft: 32.5,
    paddingRight: 32.5,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderRadius: 6,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700',
    color: '#1A1D27',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingTop: 40,
    paddingRight: 25,
    paddingBottom: 40,
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customCheckboxChecked: {
    backgroundColor: '#4ABF40',
    borderColor: '#4ABF40',
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '400',
    lineHeight: 24,
    paddingRight: 30,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 32.5,
    paddingRight: 32.5,
  },
  backButton: {
    backgroundColor: '#3B4862',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  confirmButton: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 4,
  },
  confirmButtonEnabled: {
    backgroundColor: '#4CAF50',
  },
  confirmButtonDisabled: {
    backgroundColor: '#2F3541',
  },
  confirmText: {
    fontWeight: '700',
    fontSize: 16,
  },
  confirmTextEnabled: {
    color: '#fff',
  },
  confirmTextDisabled: {
    color: '#56698F',
  },
});

export default styles;
