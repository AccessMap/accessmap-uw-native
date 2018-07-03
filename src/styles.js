import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  bottomview: {
    height: 160,
    padding: 8,
  },
  temporary: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF',
    zIndex: 100000,
    elevation: 100000,
  }
});
