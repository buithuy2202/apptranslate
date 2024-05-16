import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/navigation';
const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigate = (
  routePath: keyof RootStackParamList,
  params?: object,
): void => {
  navigationRef.isReady() &&
    navigationRef.dispatch(CommonActions.navigate(routePath, params));
};

const goBack = (): boolean => {
  navigationRef.isReady() && navigationRef.dispatch(CommonActions.goBack());
  return true;
};

const reset = (routePath: keyof RootStackParamList, params = {}): void => {
  navigationRef.isReady() &&
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: routePath, params}],
      }),
    );
};

const push = (routePath: keyof RootStackParamList, params?: object): void => {
  navigationRef.isReady() &&
    navigationRef.dispatch(StackActions.push(routePath, params));
};

const replace = (
  routePath: keyof RootStackParamList,
  params?: object,
): void => {
  navigationRef.isReady() &&
    navigationRef.dispatch(StackActions.replace(routePath, params));
};

const pop = (count?: number): void => {
  navigationRef.isReady() && navigationRef.dispatch(StackActions.pop(count));
};

export {goBack, navigate, navigationRef, pop, push, replace, reset};
