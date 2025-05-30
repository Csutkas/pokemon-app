import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../assets';
import {
  RADIUS_12,
  SCREEN_DEFAULT_HORIZONTAL_PADDING,
  SPACE_12,
  SPACE_16,
  SPACE_24,
  SPACE_4,
  SPACE_8,
} from '../../utils';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SCREEN_DEFAULT_HORIZONTAL_PADDING,
  },
  cardContainerRow: {
    gap: SPACE_4,
    marginBottom: SPACE_8,
  },
  dataContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.ADDITIONAL_100,
    paddingHorizontal: SPACE_16,
  },
  dataContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SPACE_24,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: SPACE_8,
    marginVertical: SPACE_4,
  },
  elementContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: SPACE_12,
    paddingVertical: SPACE_8,
    borderRadius: RADIUS_12,
    borderColor: colors.PRIMARY_300,
    backgroundColor: colors.BACKGROUND_100,
    borderWidth: 1,
  },
  buttonContainer: {
    display: 'flex',
  },
  cardLabelText: {
    ...fonts.BODY_NORMAL_REGULAR,
    color: colors.TEXT_800,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.ADDITIONAL_200,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: colors.BACKGROUND_200,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.ADDITIONAL_200,
    borderRadius: 8,
    backgroundColor: colors.BACKGROUND_200,
  },
  picker: {
    height: 40,
    fontSize: 16,
  },
});

export default styles;
