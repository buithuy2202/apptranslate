import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {APP_SCREEN, HomeTabParamList} from './navigation';

import IconHistory from 'components/icons/IconHistory';
import IconHome from 'components/icons/IconHome';
import IconTranslateCamera from 'components/icons/IconTranslateCamera';
import IconTranslateText from 'components/icons/IconTranslateText';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import FavoriteScreen from 'screens/History';
import HomeScreen from 'screens/Home';
import ProfileScreen from 'screens/Profile';
import TranslateText from 'screens/TranslateText';

const TabHome = createBottomTabNavigator<HomeTabParamList>();

export const HomeTab = (): JSX.Element => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TabHome.Navigator
        initialRouteName={APP_SCREEN.HOME}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {route.name === APP_SCREEN.HOME ? (
                  <IconHome color={focused ? '#F24E1E' : '#6073BC'} />
                ) : route.name === APP_SCREEN.TRANSLATE_TEXT ? (
                  <IconTranslateText color={focused ? '#F24E1E' : '#6073BC'} />
                ) : route.name === APP_SCREEN.HISTORY ? (
                  <IconHistory color={focused ? '#F24E1E' : '#6073BC'} />
                ) : (
                  <IconTranslateCamera
                    color={focused ? '#F24E1E' : '#6073BC'}
                  />
                )}
              </View>
            );
          },
          tabBarActiveTintColor: '#F24E1E',
          tabBarInactiveTintColor: '#6073BC',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#122053',
            height: 70,
            paddingBottom: 10,
          },
        })}>
        <TabHome.Screen
          name={APP_SCREEN.HOME}
          component={HomeScreen}
          options={{tabBarLabel: 'Trang chủ'}}
        />
        <TabHome.Screen
          name={APP_SCREEN.TRANSLATE_TEXT}
          component={TranslateText}
          options={{tabBarLabel: 'Văn bản'}}
        />
        <TabHome.Screen
          name={APP_SCREEN.HISTORY}
          component={FavoriteScreen}
          options={{tabBarLabel: 'Lưu'}}
        />
        <TabHome.Screen
          name={APP_SCREEN.TRANSLATE_CAMERA}
          component={ProfileScreen}
          options={{tabBarLabel: 'Máy ảnh'}}
        />
      </TabHome.Navigator>
    </KeyboardAvoidingView>
  );
};
