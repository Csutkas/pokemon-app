import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  emailTitleText: {
    ...fonts.BODY_NORMAL_REGULAR,
  },
  clearText: {
    ...fonts.BODY_NORMAL_REGULAR,
    marginLeft: 4,
    color: colors.TEXT_600,
  },
});

export default styles;
