import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const FavoriteScreen: FC<HomeTabScreenProps<APP_SCREEN.FAVORITE>> = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;
