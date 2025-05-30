import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import { colors, fonts } from '../../assets';
import { RADIUS_8, SPACE_12 } from '../../utils';

type StylesType = {
  input: StyleProp<TextStyle>;
  errorText: StyleProp<TextStyle>;
};
type NamedStylesType = StylesType & StyleSheet.NamedStyles<unknown>;

export const styles = (props: { $disabled?: boolean; $isError?: boolean }): NamedStylesType => {
  const commonTextFieldStyle: NamedStylesType = {
    input: {
      ...fonts.BODY_NORMAL_REGULAR,
      color: props.$disabled ? colors.TEXT_400 : colors.TEXT_700,
      backgroundColor: props.$disabled ? colors.DISABLED_200 : colors.BACKGROUND_100,
      borderWidth: 1,
      borderColor: props.$disabled ? colors.DISABLED_400 : props.$isError ? colors.ERROR_100 : colors.PRIMARY_100,
      borderRadius: RADIUS_8,
      padding: SPACE_12,
    },
    errorText: {
      ...fonts.BODY_SMALL_REGULAR,
      color: colors.ERROR_100,
    },
  };

  return StyleSheet.create(commonTextFieldStyle);
};
