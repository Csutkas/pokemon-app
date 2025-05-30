import React, {JSX, memo} from 'react';
import {Pressable, Text, View} from 'react-native';

import {CommonSpacer} from '../../../common-ui';
import styles from '../styles';
import {CatchProps} from '../hooks/use-home-screen';

type CardProps = {
  onPress: () => void;
  title: string;
  onCatch: ({id}: CatchProps) => void;
  onRelease: ({id}: CatchProps) => void;
  isCaught: boolean;
};

export const Card = memo(
  ({title, onPress, onCatch, onRelease, isCaught}: CardProps): JSX.Element => {
    return (
      <View style={styles.cardContainer}>
        <Pressable onPress={onPress} style={styles.elementContainer}>
          <Text style={styles.cardLabelText}>{title}</Text>
          <Text style={styles.cardLabelText}>{isCaught ? 'Catched' : '-'}</Text>
        </Pressable>

        <CommonSpacer multiplier={2} />
        <Pressable
          onPress={() =>
            isCaught ? onRelease({id: title}) : onCatch({id: title})
          }>
          <Text style={styles.cardLabelText}>
            {isCaught ? 'Release' : 'Catch'}
          </Text>
        </Pressable>
      </View>
    );
  },
);
