import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets';
import { RADIUS_12, SPACE_12, SPACE_28, SPACE_4, SPACE_8 } from '../../utils';

const styles = StyleSheet.create({
  cardContainerRow: {
    gap: SPACE_4,
    marginBottom: SPACE_8,
  },
  cardContainer: {
    flexShrink: 1,
    width: '50%',
    paddingHorizontal: SPACE_12,
    paddingVertical: SPACE_28,
    borderRadius: RADIUS_12,
    borderColor: colors.PRIMARY_300,
    borderWidth: 1,
    backgroundColor: colors.ADDITIONAL_100,
    alignSelf: 'flex-start',
  },
  cardLabelText: {
    ...fonts.BODY_NORMAL_REGULAR,
    color: colors.TEXT_800,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default styles;
