import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProfileScreen: FC<HomeTabScreenProps<APP_SCREEN.PROFILE>> = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
