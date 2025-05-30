import React, {JSX} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {globalStyles} from '../../assets';
import {CommonSpacer} from '../../common-ui';
import styles from './styles';

export const DemoScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View style={globalStyles.rootContainer}>
        <View style={styles.pageContainer}>
          <View>
            <CommonSpacer multiplier={6} />
            {/* Title */}
            <Text style={globalStyles.titleText}>Pokemon details</Text>
            <CommonSpacer multiplier={4} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
