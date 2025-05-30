import React, {JSX, memo} from 'react';
import {Pressable, Text} from 'react-native';

import {CommonSpacer} from '../../../common-ui';
import styles from '../styles';

type CardProps = {
  onPress: () => void;
  title: string;
};

export const Card = memo(({title, onPress}: CardProps): JSX.Element => {
  return (
    <>
      <Pressable onPress={onPress} style={styles.cardContainer}>
        <Text style={styles.cardLabelText}>{title}</Text>
      </Pressable>
      <CommonSpacer multiplier={2} />
    </>
  );
});
