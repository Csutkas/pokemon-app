import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
