import {StyleSheet} from 'react-native';

import {colors} from '../colors/colors';
import {fonts} from './fonts';

export const globalStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_100,
  },
  titleText: {
    ...fonts.TITLE_M_MEDIUM,
    color: colors.TEXT_800,
  },
});
