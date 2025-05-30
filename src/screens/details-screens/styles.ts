import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../assets';
import {SCREEN_DEFAULT_HORIZONTAL_PADDING} from '../../utils';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_DEFAULT_HORIZONTAL_PADDING,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  detailsText: {
    ...fonts.BODY_LARGE_MEDIUM,
    color: colors.TEXT_800,
  },
  abilityText: {
    ...fonts.BODY_NORMAL_BOLD,
    color: colors.TEXT_600,
  },
});

export default styles;
