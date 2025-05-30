import React, {JSX, memo} from 'react';
import {Pressable, Text, View} from 'react-native';

import {CommonSpacer} from '../../../common-ui';
import styles from '../styles';
import {CatchProps} from '../hooks/use-home-screen';

type CardProps = {
  onPress: () => void;
  title: string;
  onCatch: ({id}: CatchProps) => void;
};

export const Card = memo(
  ({title, onPress, onCatch}: CardProps): JSX.Element => {
    return (
      <View style={styles.cardContainer}>
        <Pressable onPress={onPress} style={styles.elementContainer}>
          <Text style={styles.cardLabelText}>{title}</Text>
        </Pressable>
        <CommonSpacer multiplier={2} />

        <Pressable onPress={() => onCatch({id: title})}>
          <Text style={styles.cardLabelText}>Catch</Text>
        </Pressable>
      </View>
    );
  },
);
