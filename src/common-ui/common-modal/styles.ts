import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../assets';
import { SPACE_16, SPACE_32 } from '../../utils';

export default StyleSheet.create({
  containerBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.TEXT_300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    backgroundColor: colors.BACKGROUND_100,
    borderRadius: SPACE_16,
    padding: SPACE_32,
  },
  label: {
    ...fonts.BODY_NORMAL_REGULAR,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
