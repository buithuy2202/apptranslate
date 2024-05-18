import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConversationScreen from 'screens/Conversation';
import RecordScreen from 'screens/Record';
import {HomeTab} from './HomeTab';
import {navOptionHandler} from './RootStack';
import {APP_SCREEN, AuthStackParamList} from './navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.HOME_TAB}
      screenOptions={navOptionHandler}>
      <Stack.Screen name={APP_SCREEN.HOME_TAB} component={HomeTab} />
      <Stack.Screen
        name={APP_SCREEN.CONVERSATION}
        component={ConversationScreen}
      />
      <Stack.Screen name={APP_SCREEN.RECORD} component={RecordScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;
