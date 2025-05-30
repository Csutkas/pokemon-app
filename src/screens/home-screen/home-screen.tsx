import React, {JSX} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {globalStyles} from '../../assets';
import {CommonSpacer} from '../../common-ui';

export const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View style={globalStyles.rootContainer}>
        {/* Title */}
        <CommonSpacer multiplier={6} />
        <Text style={globalStyles.titleText}>Pokemon list</Text>
      </View>
    </SafeAreaView>
  );
};
