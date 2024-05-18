import {Box, Typography} from 'components';
import IconRecord from 'components/icons/IconRecord';
import IconTranslateCamera from 'components/icons/IconTranslateCamera';
import IconTranslateText from 'components/icons/IconTranslateText';
import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch} from 'store/store';
import {SCREEN_WIDTH} from 'utils/constant';

const HomeScreen: FC<HomeTabScreenProps<APP_SCREEN.HOME>> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  return (
    <Box
      flex={1}
      px={20}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: '#141F47',
      }}
      center
      middle>
      <Image
        source={require('../../assets/images/banner.png')}
        resizeMode="contain"
        style={{
          height: 240,
          width: SCREEN_WIDTH - 40,
        }}
      />
      <Box row wrap style={{gap: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(APP_SCREEN.TRANSLATE_TEXT, {})}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 32,
            borderWidth: 1,
            borderColor: '#3D63EA',
            height: 150,
            width: (SCREEN_WIDTH - 80) / 2,
            gap: 10,
            backgroundColor: '#182968',
          }}>
          <IconTranslateText color={'#fff'} />
          <Typography variant="Bold18" color="White">
            Văn bản
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(APP_SCREEN.RECORD)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 32,
            borderWidth: 1,
            borderColor: '#3D63EA',
            height: 150,
            width: (SCREEN_WIDTH - 80) / 2,
            gap: 10,
            backgroundColor: '#182968',
          }}>
          <IconRecord color={'#fff'} />
          <Typography variant="Bold18" color="White">
            Ghi âm
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(APP_SCREEN.CONVERSATION)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 32,
            borderWidth: 1,
            borderColor: '#3D63EA',
            height: 150,
            width: (SCREEN_WIDTH - 80) / 2,
            gap: 10,
            backgroundColor: '#182968',
          }}>
          <IconRecord color={'#fff'} />
          <Typography variant="Bold18" color="White">
            Cuộc hội thoại
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(APP_SCREEN.TRANSLATE_CAMERA)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 32,
            borderWidth: 1,
            borderColor: '#3D63EA',
            height: 150,
            width: (SCREEN_WIDTH - 80) / 2,
            gap: 10,
            backgroundColor: '#182968',
          }}>
          <IconTranslateCamera color={'#fff'} />
          <Typography variant="Bold18" color="White">
            Máy ảnh
          </Typography>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default HomeScreen;
