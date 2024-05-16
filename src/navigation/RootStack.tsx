import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';

const Stack = createNativeStackNavigator();

export const navOptionHandler = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const RootStack = (): JSX.Element => {
  const logined = true;
  return (
    <Stack.Navigator screenOptions={navOptionHandler}>
      {logined ? (
        <Stack.Screen name="Home" component={AuthStack} />
      ) : (
        <Stack.Screen name="Login" component={UnAuthStack} />
      )}
    </Stack.Navigator>
  );
};
export default RootStack;
