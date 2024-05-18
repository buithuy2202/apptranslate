import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {History} from 'containers/Config/slice';

export enum APP_SCREEN {
  UNAUTHORIZE = 'UNAUTHORIZE',
  AUTHORIZE = 'AUTHORIZE',
  HOME_TAB = 'HOME_TAB',
  HOME = 'HOME',
  TRANSLATE_TEXT = 'TRANSLATE_TEXT',
  HISTORY = 'HISTORY',
  TRANSLATE_CAMERA = 'TRANSLATE_CAMERA',
  CONVERSATION = 'CONVERSATION',
}

export type RootStackParamList = {
  [APP_SCREEN.AUTHORIZE]: undefined;
  [APP_SCREEN.UNAUTHORIZE]: undefined;
} & AuthStackParamList &
  UnAuthStackParamList &
  HomeTabParamList;

export type AuthStackParamList = {
  [APP_SCREEN.HOME_TAB]: undefined;
  [APP_SCREEN.CONVERSATION]: undefined;
};

export type UnAuthStackParamList = {};

export type HomeTabParamList = {
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.TRANSLATE_TEXT]: {historySaved?: History};
  [APP_SCREEN.HISTORY]: undefined;
  [APP_SCREEN.TRANSLATE_CAMERA]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type UnAuthStackScreenProps<T extends keyof UnAuthStackParamList> =
  NativeStackScreenProps<UnAuthStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    AuthStackScreenProps<keyof AuthStackParamList>
  >;
