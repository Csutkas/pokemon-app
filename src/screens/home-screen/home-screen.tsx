import React, {JSX} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {globalStyles} from '../../assets';
import {CommonSpacer} from '../../common-ui';
import {Card} from './components/home-card';
import {useHomeScreen} from './hooks/use-home-screen';
import styles from './styles';

export const HomeScreen = (): JSX.Element => {
  const {
    data,
    isError,
    isLoading,
    navigateToDemoScreen,
    search,
    setSearch,
    selectedType,
    types,
    typesLoading,
    typesError,
    onCatch,
    onRelease,
    catchedPokemon,
    handleTypeSelect,
  } = useHomeScreen();

  if (isLoading || typesLoading) {
    return (
      <SafeAreaView>
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }

  if (isError || typesError) {
    return (
      <SafeAreaView>
        <Text>Error happened</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <View style={globalStyles.rootContainer}>
        <View style={styles.headerContainer}>
          <CommonSpacer multiplier={6} />
          <Text style={globalStyles.titleText}>Pokemon list</Text>

          <CommonSpacer multiplier={2} />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search Pokémon..."
            autoFocus={true}
          />

          <CommonSpacer multiplier={4} />
          <FlatList
            data={[
              {name: '', label: 'All Types'},
              ...types.map(type => ({
                ...type,
                label: type.name.charAt(0).toUpperCase() + type.name.slice(1),
              })),
            ]}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.typeChip,
                  item.name === selectedType && styles.typeChipSelected,
                ]}
                onPress={() => handleTypeSelect(item.name)}>
                <Text style={styles.typeChipText}>{item.label}</Text>
              </Pressable>
            )}
            keyExtractor={item => item.name || 'all-types'}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.typeChipsContainer}
          />
        </View>

        <CommonSpacer multiplier={4} />
        <View style={styles.dataContainer}>
          <View style={styles.dataContainerRow}>
            <Text>Name</Text>
            <Text>Status</Text>
          </View>
          {data && (
            <FlatList
              data={data}
              renderItem={({item}) => (
                <Card
                  title={item.name}
                  onPress={() => navigateToDemoScreen(item.name)}
                  onCatch={onCatch}
                  onRelease={onRelease}
                  isCaught={catchedPokemon.includes(item.name)}
                />
              )}
              keyExtractor={(item, index) => `${index}-${item.name}`}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>

        <CommonSpacer multiplier={6} />
      </View>
    </SafeAreaView>
  );
};
