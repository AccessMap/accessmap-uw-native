import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  mapButtons: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    marginBottom: 8,
    marginRight: 8,
    bottom: 0,
    right: 0,
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
