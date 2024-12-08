import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1E26',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  viewCoconut: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  counterText: {
    color: '#E84393',
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewProgress: {
    paddingTop: 12,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#2D2D44',
    borderRadius: 10,
    flexDirection: 'row', 
    overflow: 'hidden',
  },
  progressSegment: {
    flex: 1,
    height: '100%',
    marginRight: 1, 
    borderRadius: 10,
  },
  activeSegment: {
    backgroundColor: '#6EFF74', 
  },
  inactiveSegment: {
    backgroundColor: '#2D2D44',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 24,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF', 
  },
});

export default styles;
