import {StyleSheet} from 'react-native';

const stylesBid = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1E26',
    paddingTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  card: {
    backgroundColor: 'rgba(60, 72, 104, 1)',
    borderRadius: 11,
    margin: 5,
    flex: 1,
    borderWidth: 3,
  },
  cardPlaceholder: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 16,
    paddingTop: 8,
    textAlign: 'center',
  },
  viewTitle: {
    flexDirection: 'row',
    gap: 5,
    paddingTop: 12,
    paddingBottom: 19,
  },
  viewBox: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
  },
  viewCart: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
    flexDirection: 'column',
  },
  name: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 4,
  },
  viewCoconut: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    paddingBottom: 8,
  },
  coconut: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  viewButton: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 4,
    paddingTop: 8,
    paddingBottom: 7,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(199, 87, 124, 1)',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
  },
  buttonText: {
    color: 'rgba(31, 35, 50, 1)',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 12,
    marginRight: 5,
  },
  buttonPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default stylesBid;
