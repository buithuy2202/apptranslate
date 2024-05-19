import TesseractOcr from '@devinikhiya/react-native-tesseractocr';
import {translate} from '@vitalets/google-translate-api';
import {Box, Typography} from 'components';
import IconArrowRight from 'components/icons/IconArrowRight';
import IconCheck from 'components/icons/IconCheck';
import IconClose from 'components/icons/IconClose';
import IconSearch from 'components/icons/IconSearch';
import IconTranslateCamera from 'components/icons/IconTranslateCamera';
import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from 'utils/colors';
import {
  LanguageCameraVariant,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  getFullLanguageName,
  supportedLanguagesCamera,
} from 'utils/constant';

const CameraScreen: FC<
  HomeTabScreenProps<APP_SCREEN.TRANSLATE_CAMERA>
> = () => {
  const insets = useSafeAreaInsets();
  const actionSheetFromRef = useRef<ActionSheetRef>(null);
  const actionSheetToRef = useRef<ActionSheetRef>(null);
  const [languageFrom, setLanguageFrom] = useState<LanguageCameraVariant>('vi');
  const [languageTo, setLanguageTo] = useState<LanguageCameraVariant>('en');
  const [searchLanguageFrom, setSearchLanguageFrom] = useState<string>('');
  const [searchLanguageTo, setSearchLanguageTo] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [textTo, setTextTo] = useState<string>('');
  const [imageUri, setImageUri] = useState<string>();

  const handleLaunchCamera = () => {
    setText('');
    setTextTo('');
    setImageUri('');
    launchCamera(
      {
        mediaType: 'photo',
      },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          setImageUri(uri);
          recognizeTextFromImage(uri);
        }
      },
    );
  };

  const recognizeTextFromImage = async (imageUri?: string) => {
    try {
      const tesseractOptions = {
        tessdata: 'tessdata',
      };
      const recognizedText = await TesseractOcr.recognize(
        imageUri,
        getFullLanguageName(languageFrom).toLowerCase().substring(0, 3),
        tesseractOptions,
      );
      setText(recognizedText);
    } catch (err) {
      console.error('err', err);
    }
  };

  const translation = async () => {
    try {
      const res = await translate(text, {
        from: languageFrom,
        to: languageTo,
      });
      setTextTo(res.text);
    } catch (error) {
      console.log('error', error);
      setTextTo('Can not translate');
    }
  };

  const languageCodes = Object.keys(supportedLanguagesCamera).map(lang => {
    if (typeof lang !== 'string') {
      return;
    }
    return lang;
  }) as LanguageCameraVariant[];

  const getLanguageCodes = (searchText: string) => {
    if (!searchText) {
      return languageCodes;
    }
    return languageCodes.filter(lang =>
      getFullLanguageName(lang)
        .toLowerCase()
        .includes(searchText.toLowerCase()),
    );
  };

  const renderItemFrom: ListRenderItem<LanguageCameraVariant> = ({
    item,
  }: ListRenderItemInfo<LanguageCameraVariant>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLanguageFrom(item);
          actionSheetFromRef.current?.hide();
        }}>
        <Box row center py={16} space="between">
          <Typography variant="Regular16">
            {getFullLanguageName(item)}
          </Typography>
          {item === languageFrom && <IconCheck style={{marginLeft: 16}} />}
        </Box>
      </TouchableOpacity>
    );
  };

  const renderItemTo: ListRenderItem<LanguageCameraVariant> = ({
    item,
  }: ListRenderItemInfo<LanguageCameraVariant>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLanguageTo(item);
          actionSheetToRef.current?.hide();
        }}>
        <Box row center py={16} space="between">
          <Typography variant="Regular16">
            {getFullLanguageName(item)}
          </Typography>
          {item === languageTo && <IconCheck style={{marginLeft: 16}} />}
        </Box>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (text) {
      translation();
    }
  }, [text]);

  return (
    <Box
      flex={1}
      p={20}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: '#141F47',
      }}>
      <Box
        row
        space="between"
        mt={20}
        mb={20}
        px={30}
        py={14}
        style={{
          backgroundColor: '#1A254F',
          borderRadius: 32,
          width: SCREEN_WIDTH - 40,
          position: 'relative',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            actionSheetFromRef.current?.show();
          }}>
          <Typography variant="Regular14" color="White">
            {getFullLanguageName(languageFrom)}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            actionSheetToRef.current?.show();
          }}>
          <Typography variant="Regular14" color="White">
            {getFullLanguageName(languageTo)}
          </Typography>
        </TouchableOpacity>
        <Box
          style={{
            position: 'absolute',
            left: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            borderRadius: 100,
            backgroundColor: '#F24E1E',
          }}>
          <IconArrowRight />
        </Box>
      </Box>
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Typography variant="Regular14" color="White">
        {textTo}
      </Typography>
      <Box
        center
        my={20}
        style={{position: 'absolute', bottom: 20, left: '50%', right: '50%'}}>
        <TouchableOpacity
          onPress={handleLaunchCamera}
          style={{padding: 20, borderRadius: 32, backgroundColor: '#6074BC'}}>
          <IconTranslateCamera color={'#fff'} />
        </TouchableOpacity>
      </Box>
      <ActionSheet
        ref={actionSheetFromRef}
        containerStyle={{
          minHeight: 400,
          maxHeight: SCREEN_HEIGHT * 0.8,
          padding: 20,
        }}>
        <Box row center space="between" mb={20}>
          <Typography variant="Bold14" color="Black">
            {'Dịch từ'}
          </Typography>
          <TouchableOpacity onPress={() => actionSheetFromRef.current?.hide()}>
            <IconClose color={'#000'} />
          </TouchableOpacity>
        </Box>
        <Box
          mb={20}
          style={{
            width: '100%',
            height: 40,
            paddingHorizontal: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.Grey_100,
          }}>
          <Box style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <IconSearch />
            <Box style={{flex: 1, justifyContent: 'center'}}>
              <TextInput
                style={{fontSize: 16, paddingHorizontal: 16}}
                value={searchLanguageFrom}
                onChangeText={value => setSearchLanguageFrom(value)}
                allowFontScaling={false}
              />
            </Box>
          </Box>
        </Box>
        <FlatList
          data={getLanguageCodes(searchLanguageFrom)}
          showsVerticalScrollIndicator={false}
          keyExtractor={lang => `${lang}`}
          renderItem={renderItemFrom}
        />
      </ActionSheet>
      <ActionSheet
        ref={actionSheetToRef}
        containerStyle={{
          minHeight: 400,
          maxHeight: SCREEN_HEIGHT * 0.8,
          padding: 20,
        }}>
        <Box row center space="between" mb={20}>
          <Typography variant="Bold14" color="Black">
            {'Dịch sang'}
          </Typography>
          <TouchableOpacity onPress={() => actionSheetToRef.current?.hide()}>
            <IconClose color={'#000'} />
          </TouchableOpacity>
        </Box>
        <Box
          mb={20}
          style={{
            width: '100%',
            height: 40,
            paddingHorizontal: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.Grey_100,
          }}>
          <Box style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <IconSearch />
            <Box style={{flex: 1, justifyContent: 'center'}}>
              <TextInput
                style={{fontSize: 16, paddingHorizontal: 16}}
                value={searchLanguageTo}
                onChangeText={value => setSearchLanguageTo(value)}
                allowFontScaling={false}
              />
            </Box>
          </Box>
        </Box>
        <FlatList
          data={getLanguageCodes(searchLanguageTo)}
          showsVerticalScrollIndicator={false}
          keyExtractor={lang => `${lang}`}
          renderItem={renderItemTo}
        />
      </ActionSheet>
    </Box>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT * 0.35,
    marginTop: 20,
    marginBottom: 20,
  },
});
