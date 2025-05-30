import {NavigatorScreenParams} from '@react-navigation/native';

export type RootNavigatorParamList = {
  DetailsRoute: {name: string};
  HomeNavigatorRoute: NavigatorScreenParams<HomeNavigatorParamList>;
};
export type RootNavigatorRouteName = keyof RootNavigatorParamList;

export type HomeNavigatorParamList = {
  HomeScreenRoute: undefined;
  AboutScreenRoute: undefined;
};
