import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CameraScreen: FC<
  HomeTabScreenProps<APP_SCREEN.TRANSLATE_CAMERA>
> = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Text>CameraScreen</Text>
    </View>
  );
};

export default CameraScreen;
