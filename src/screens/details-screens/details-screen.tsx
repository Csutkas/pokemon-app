import React, {JSX} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';

import {globalStyles} from '../../assets';
import {CommonButton, CommonSpacer} from '../../common-ui';
import {useDetailsScreen} from './hooks/use-details-screen';
import styles from './styles';

export const DetailsScreen = (): JSX.Element => {
  const {
    onGoBack,
    isLoading,
    isError,
    pokemonName,
    pokemonWeight,
    pokemonHeight,
    imageUrl,
    abilities,
  } = useDetailsScreen();

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading..</Text>
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
        <View style={styles.pageContainer}>
          <View>
            <CommonSpacer multiplier={6} />
            {/* Title */}
            <Text style={globalStyles.titleText}>Pokemon details</Text>
            <CommonSpacer multiplier={4} />

            {/* Image */}
            <View style={styles.imageContainer}>
              <Image source={{uri: imageUrl}} style={styles.image} />
            </View>

            {/* Name */}
            <Text style={styles.detailsText}>Name: {pokemonName}</Text>
            <CommonSpacer multiplier={4} />

            {/* Height */}
            <Text style={styles.detailsText}>Height: {pokemonHeight}</Text>
            <CommonSpacer multiplier={4} />

            {/* Weight */}
            <Text style={styles.detailsText}>Weight: {pokemonWeight}</Text>
            <CommonSpacer multiplier={4} />

            {/* Abilities */}
            <Text style={styles.detailsText}>Abilities: </Text>

            <FlatList
              data={abilities}
              renderItem={({item}) => (
                <Text style={styles.abilityText}>{item.ability.name}</Text>
              )}
              keyExtractor={(item, index) => `${index}-${item.ability.name}`}
              showsVerticalScrollIndicator={false}
              numColumns={1}
            />
          </View>
          <View>
            <CommonSpacer multiplier={4} />
            <CommonButton label="Go back" onPress={onGoBack} variant="text" />
            <CommonSpacer multiplier={6} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
