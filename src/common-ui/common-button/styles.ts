import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts } from '../../assets';
import { RADIUS_12, SPACE_12 } from '../../utils';

type StylesType = {
  button: StyleProp<ViewStyle>;
  primaryButtonStyle: StyleProp<ViewStyle | TextStyle>;
  secondaryButtonStyle: StyleProp<ViewStyle>;
  textButtonStyle: StyleProp<ViewStyle | TextStyle>;
  label: StyleProp<TextStyle>;
  textButtonLabelStyle: StyleProp<TextStyle>;
};

type CustomStyleProp = {
  disabled?: boolean;
};

export const styles = ({ disabled }: CustomStyleProp): StylesType => {
  return {
    button: {
      padding: SPACE_12,
      borderRadius: RADIUS_12,
      alignItems: 'center',
    },
    primaryButtonStyle: {
      backgroundColor: disabled ? colors.DISABLED_200 : colors.PRIMARY_100,
    },
    secondaryButtonStyle: {
      backgroundColor: disabled ? colors.DISABLED_200 : colors.SECONDARY_100,
    },
    textButtonStyle: {
      backgroundColor: disabled ? colors.DISABLED_200 : colors.BACKGROUND_100,
      borderColor: colors.BACKGROUND_400,
      borderWidth: 1,
    },
    label: {
      ...fonts.BODY_LARGE_MEDIUM,
      color: disabled ? colors.TEXT_400 : colors.TEXT_100,
    },
    textButtonLabelStyle: {
      color: disabled ? colors.TEXT_400 : colors.SECONDARY_100,
    },
  };
};
