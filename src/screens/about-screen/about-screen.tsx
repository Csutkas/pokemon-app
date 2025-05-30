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
          <CommonSpacer multiplier={6} />
          <Text style={styles.description}>
            This application was built using React Native. It fetches data from
            the PokePI to display information about different Pokemon types and
            individual Pokémon.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
