import { StyleSheet } from 'react-native';
const { Dimensions } = require('react-native');
const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000060',
  },
  background: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#00000060',
    width: '100%',
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
