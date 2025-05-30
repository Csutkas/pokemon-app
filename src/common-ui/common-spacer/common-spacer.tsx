import React, { useMemo } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface CommonSpacerProps {
  multiplier?: number;
  direction?: 'vertical' | 'horizontal';
}

export const CommonSpacer = ({ multiplier = 1, direction = 'vertical' }: CommonSpacerProps): JSX.Element => {
  const DEFAULT_UNIT = 4;

  const styleMemo = useMemo(
    () =>
      styles({
        $direction: direction,
        $distance: multiplier * DEFAULT_UNIT,
      }),
    [direction, multiplier]
  );

  return <View style={styleMemo.container} />;
};
