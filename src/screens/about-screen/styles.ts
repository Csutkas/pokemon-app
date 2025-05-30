import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../assets';
import {SCREEN_DEFAULT_HORIZONTAL_PADDING} from '../../utils';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: SCREEN_DEFAULT_HORIZONTAL_PADDING,
  },
  emailTitleText: {
    ...fonts.BODY_NORMAL_REGULAR,
  },
  clearText: {
    ...fonts.BODY_NORMAL_REGULAR,
    marginLeft: 4,
    color: colors.TEXT_600,
  },
  description: {
    fontSize: 16,
    color: colors.TEXT_600,
    lineHeight: 24,
  },
});

export default styles;
