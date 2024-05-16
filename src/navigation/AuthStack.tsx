import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_SCREEN, AuthStackParamList} from './navigation';
import {navOptionHandler} from './RootStack';
import {HomeTab} from './HomeTab';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.HOME_TAB}
      screenOptions={navOptionHandler}>
      <Stack.Screen name={APP_SCREEN.HOME_TAB} component={HomeTab} />
    </Stack.Navigator>
  );
};
export default AuthStack;
