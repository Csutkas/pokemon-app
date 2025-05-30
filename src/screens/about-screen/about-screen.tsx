import React, {JSX} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {globalStyles} from '../../assets';
import {CommonSpacer} from '../../common-ui';
import styles from './styles';

export const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View style={globalStyles.rootContainer}>
        <View style={styles.pageContainer}>
          <View>
            <CommonSpacer multiplier={6} />
            <Text style={globalStyles.titleText}>About screen</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
