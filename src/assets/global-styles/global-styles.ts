import { StyleSheet } from 'react-native';

import { ds, SCREEN_DEFAULT_HORIZONTAL_PADDING } from '../../utils';
import { colors } from '../colors/colors';
import { fonts } from './fonts';

export const globalStyles = StyleSheet.create({
  safeAreaContainer: {
    flexGrow: 1,
  },
  rootContainer: {
    paddingHorizontal: ds(SCREEN_DEFAULT_HORIZONTAL_PADDING),
    flex: 1,
    backgroundColor: colors.BACKGROUND_100,
  },
  titleText: {
    ...fonts.TITLE_M_MEDIUM,
    color: colors.TEXT_800,
  },
});
