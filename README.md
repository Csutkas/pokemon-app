# Pokemon Catch App

A React Native mobile application that allows users to browse, filter, catch, and release Pokémon using the PokeAPI. The app features a searchable Pokémon list, type-based filtering with pressable chips, and persistent storage of caught Pokémon using Redux and redux-persist.
Features

Browse Pokémon: View a list of Pokémon fetched from PokeAPI.
Search: Filter Pokémon by name using a search input with a clear button.
Type Filtering: Filter Pokémon by type using pressable chips (e.g., Fire, Water, All Types).
Catch/Release: Catch or release Pokémon, with status displayed in the list.
Persistent Storage: Caught Pokémon are saved across app reloads using redux-persist with AsyncStorage.
Navigation: Tap a Pokémon to view details (navigation setup assumed).

## Tech Stack

React Native: Mobile app framework.
TypeScript: Type-safe JavaScript.
Redux Toolkit: State management with redux-persist for persistence.
React Navigation: Navigation between screens.
React Query (TanStack Query): Data fetching and caching.
PokeAPI: Public API for Pokémon data.
React Native Vector Icons: Icons for UI elements.
AsyncStorage: Persistent storage for Redux state.

## Prerequisites

Node.js (v16 or later)
npm
React Native CLI
Android Studio or Xcode for emulators
Reactotron (optional, for debugging in development)

## Setup

Clone the Repository:
git clone

Install Dependencies:
npm install

Install iOS Pods (for iOS):
cd ios && pod install && cd ..

Configure Reactotron (optional, for debugging):

Ensure ReactotronConfig.ts is set up (included in the project).
Install the Reactotron desktop app and connect in development mode.

Run the App:

Run on iOS: npm runios

Run on Android: npm run android

## Usage

### Browse Pokémon:

The home screen displays a list of Pokémon fetched from PokeAPI.
Scroll through the list or use the search bar to filter by name.

### Filter by Type:

Tap a type chip (e.g., “Fire”, “Water”, “All Types”) to filter Pokémon by type.
“All Types” resets the type filter.

### Catch/Release Pokémon:

Each Pokémon card shows its name, status (“Caught” or “Not Caught”), and a “Catch” or “Release” button.
Tap “Catch” to add a Pokémon to your caught list.
Tap “Release” to remove a caught Pokémon.
Caught Pokémon are displayed at the top of the screen and persist after app reloads.

### View Details:

Tap a Pokémon’s name to navigate to its details screen (assumes navigation setup).

## Project Structure

src/
api-hooks/: React Query hooks for fetching Pokémon and types.
assets/: Global styles and assets.
common-ui/: Reusable UI components (e.g., CommonSpacer).
models/: TypeScript interfaces (e.g., Pokemon, PokemonSliceState).
navigation/: React Navigation setup.
redux/: Redux store, slices, and hooks.
screens/: Screen components (e.g., HomeScreen).
home/: Home screen components, hooks, and styles.

## Notes

API: Uses https://pokeapi.co/api/v2/pokemon and https://pokeapi.co/api/v2/type. Ensure internet access for data fetching.
Persistence: Caught Pokémon are stored in AsyncStorage via redux-persist. Clear storage with AsyncStorage.clear() for debugging.
Debugging: Use Reactotron or console logs to inspect state and API responses (e.g., Types Response in api-hooks).
Type Chips: Replaced the native Picker with pressable chips for a modern UI. Chips are scrollable horizontally.
