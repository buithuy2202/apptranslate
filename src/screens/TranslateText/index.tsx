import Clipboard from '@react-native-clipboard/clipboard';
import {translate} from '@vitalets/google-translate-api';
import {Box, Typography} from 'components';
import IconCheck from 'components/icons/IconCheck';
import IconClose from 'components/icons/IconClose';
import IconRepeat from 'components/icons/IconRepeat';
import IconSearch from 'components/icons/IconSearch';
import IconStar from 'components/icons/IconStar';
import IconStarOutlined from 'components/icons/IconStarOutlined';
import {historySelector} from 'containers/Config/selectors';
import {History, saveHistory} from 'containers/Config/slice';
import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Keyboard,
  ListRenderItem,
  ListRenderItemInfo,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Tts from 'react-native-tts';
import {useAppDispatch, useAppSelector} from 'store/store';
import {Colors} from 'utils/colors';
import {
  LanguageVariant,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  getFullLanguageName,
  supportedLanguages,
} from 'utils/constant';
import CardTranslateFrom from './CardTranslateFrom';
import CardTranslateTo from './CardTranslateTo';

const TranslateText: FC<HomeTabScreenProps<APP_SCREEN.TRANSLATE_TEXT>> = ({
  route,
}) => {
  const insets = useSafeAreaInsets();
  console.log(route.params);
  const dispatch = useAppDispatch();
  const history = useAppSelector(historySelector);

  const actionSheetFromRef = useRef<ActionSheetRef>(null);
  const actionSheetToRef = useRef<ActionSheetRef>(null);
  const [languageFrom, setLanguageFrom] = useState<LanguageVariant>('vi');
  const [languageTo, setLanguageTo] = useState<LanguageVariant>('en');
  const [textFrom, setTextFrom] = useState<string>('');
  const [textTo, setTextTo] = useState<string>('');
  const [searchLanguageFrom, setSearchLanguageFrom] = useState<string>('');
  const [searchLanguageTo, setSearchLanguageTo] = useState<string>('');

  const translated: History = {
    from: {
      lang: languageFrom,
      text: textFrom,
    },
    to: {
      lang: languageTo,
      text: textTo,
    },
  };

  const languageCodes = Object.keys(supportedLanguages).map(lang => {
    if (typeof lang !== 'string') {
      return;
    }
    return lang;
  }) as LanguageVariant[];

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

  const translation = async () => {
    try {
      const res = await translate(textFrom, {
        from: languageFrom,
        to: languageTo,
      });
      setTextTo(res.text);
      Keyboard.dismiss();
    } catch (error) {
      setTextTo('Error');
    }
  };

  const speak = async (text: string) => {
    if (!text) {
      return;
    }
    try {
      await Tts.speak(text);
    } catch (error) {
      console.error('Error speaking:', error);
    }
  };

  const copyToClipboard = useCallback(
    (text: string) => {
      Clipboard.setString(text);
    },
    [Clipboard],
  );

  const renderItemFrom: ListRenderItem<LanguageVariant> = ({
    item,
  }: ListRenderItemInfo<LanguageVariant>) => {
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

  const renderItemTo: ListRenderItem<LanguageVariant> = ({
    item,
  }: ListRenderItemInfo<LanguageVariant>) => {
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
    if (route.params && route.params.historySaved) {
      setLanguageFrom(route.params.historySaved?.from.lang);
      setLanguageTo(route.params.historySaved?.to.lang);
      setTextFrom(route.params.historySaved?.from.text);
      setTextTo(route.params.historySaved?.to.text);
    }
  }, [route.params]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box
        flex={1}
        px={20}
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: '#141F47',
        }}>
        <TouchableOpacity
          disabled={textFrom === '' && textTo === ''}
          onPress={() => {
            if (textFrom !== '' && textTo !== '') {
              dispatch(saveHistory(translated));
            }
          }}>
          {!history?.some(
            his => JSON.stringify(his) === JSON.stringify(translated),
          ) ? (
            <IconStarOutlined style={{alignSelf: 'flex-end'}} color={'#fff'} />
          ) : (
            <IconStar style={{alignSelf: 'flex-end'}} color={'yellow'} />
          )}
        </TouchableOpacity>
        <Box flex={1} middle>
          <CardTranslateFrom
            style={{marginBottom: 20}}
            language={languageFrom}
            textTranslate={textFrom}
            onChangeText={value => setTextFrom(value)}
            onTranslate={translation}
            onSpeech={() => speak(textFrom)}
          />
          {textTo && (
            <CardTranslateTo
              style={{marginBottom: 32}}
              language={languageTo}
              textTranslated={textTo}
              copyText={() => copyToClipboard(textTo)}
              onSpeech={() => speak(textTo)}
            />
          )}
          <Box
            row
            space="between"
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
            <TouchableOpacity
              onPress={() => {
                setLanguageFrom(languageTo);
                setLanguageTo(languageFrom);
                setTextFrom(textTo);
                setTextTo(textFrom);
              }}
              style={{
                position: 'absolute',
                left: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                borderRadius: 100,
                backgroundColor: '#F24E1E',
              }}>
              <IconRepeat />
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
              <TouchableOpacity
                onPress={() => actionSheetFromRef.current?.hide()}>
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
              <Box
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
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
              <TouchableOpacity
                onPress={() => actionSheetToRef.current?.hide()}>
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
              <Box
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
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
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default TranslateText;
