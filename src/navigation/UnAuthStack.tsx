import React from 'react';
import {HomeTab} from './HomeTab';
import {APP_SCREEN, AuthStackParamList} from './navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator<AuthStackParamList>();

const UnAuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREEN.HOME_TAB} component={HomeTab} />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
