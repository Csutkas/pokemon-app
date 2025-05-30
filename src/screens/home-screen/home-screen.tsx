import React, {JSX} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import {globalStyles} from '../../assets';
import {CommonSpacer} from '../../common-ui';
import {Card} from './components/home-card';
import {useHomeScreen} from './hooks/use-home-screen';
import styles from './styles';

export const HomeScreen = (): JSX.Element => {
  const {data, isError, isLoading, navigateToDemoScreen} = useHomeScreen();

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView>
        <Text>Error happened</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View style={globalStyles.rootContainer}>
        {/* Title */}
        <CommonSpacer multiplier={6} />
        <Text style={globalStyles.titleText}>Pokemon list</Text>

        {/* List */}
        <CommonSpacer multiplier={4} />

        {data && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Card
                title={item.name}
                onPress={() => navigateToDemoScreen(item.name)}
              />
            )}
            keyExtractor={(item, index) => `${index}-${item.name}`}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.cardContainerRow}
          />
        )}

        <CommonSpacer multiplier={6} />
      </View>
    </SafeAreaView>
  );
};
