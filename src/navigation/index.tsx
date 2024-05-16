import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import RootStack from './RootStack';
import {navigationRef} from 'services/navigationService';

const RootRoute: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};
export default RootRoute;
