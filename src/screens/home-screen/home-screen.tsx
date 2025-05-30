import {Picker} from '@react-native-picker/picker';
import React, {JSX} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
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
    setSelectedType,
    types,
    typesLoading,
    typesError,
    onCatch,
    catchedPokemon,
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

          <CommonSpacer multiplier={2} />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedType}
              onValueChange={itemValue => setSelectedType(itemValue)}
              style={styles.picker}>
              {types.map(type => (
                <Picker.Item
                  key={type.name}
                  label={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  value={type.name}
                />
              ))}
            </Picker>
          </View>
        </View>

        <CommonSpacer multiplier={4} />
        <Text>{catchedPokemon}</Text>
        <CommonSpacer multiplier={4} />
        <View style={styles.dataContainer}>
          <View style={styles.dataContainerRow}>
            <Text>Name</Text>
            <Text>Status</Text>
            <Text>Action</Text>
          </View>
          {data && (
            <FlatList
              data={data}
              renderItem={({item}) => (
                <Card
                  title={item.name}
                  onPress={() => navigateToDemoScreen(item.name)}
                  onCatch={onCatch}
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
