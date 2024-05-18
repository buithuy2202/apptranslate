import Voice, {
  SpeechResultsEvent,
  SpeechStartEvent,
} from '@react-native-voice/voice';
import {Box, Typography} from 'components';
import IconBack from 'components/icons/IconBack';
import IconCheck from 'components/icons/IconCheck';
import IconClose from 'components/icons/IconClose';
import IconRepeat from 'components/icons/IconRepeat';
import IconSearch from 'components/icons/IconSearch';
import IconStop from 'components/icons/IconStop';
import IconVoice from 'components/icons/IconVoice';
import {APP_SCREEN, AuthStackScreenProps} from 'navigation/navigation';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from 'utils/colors';
import {
  LanguageVariant,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  getFullLanguageName,
  supportedLanguages,
} from 'utils/constant';

interface Conversation {
  lang: LanguageVariant;
  text: string;
  user: string;
}

const ConversationScreen: FC<AuthStackScreenProps<APP_SCREEN.CONVERSATION>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const actionSheetFromRef = useRef<ActionSheetRef>(null);
  const actionSheetToRef = useRef<ActionSheetRef>(null);
  const [languageFrom, setLanguageFrom] = useState<LanguageVariant>('vi');
  const [languageTo, setLanguageTo] = useState<LanguageVariant>('en');
  const [searchLanguageFrom, setSearchLanguageFrom] = useState<string>('');
  const [searchLanguageTo, setSearchLanguageTo] = useState<string>('');
  const [textRecognize, setTextRecognize] = useState<string>('');
  const [voice, setVoice] = useState<'user1' | 'user2'>();
  const [messages, setMessages] = useState<Conversation[]>([]);
  const [isListening, setIsListening] = useState<boolean>(false);

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

  const onSpeechStart = (e: SpeechStartEvent) => {
    console.log('onSpeechStart', e);
  };
  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults', e);
    const text = e.value ? e.value[0] : '';
    setTextRecognize(text);
  };

  const startListen = async (user: 'user1' | 'user2') => {
    setIsListening(true);
    setVoice(user);
    try {
      await Voice.start(user === 'user1' ? languageFrom : languageTo);
    } catch (error) {
      console.log('Speech error', error);
    }
  };

  const stopListen = async () => {
    console.log('stop');
    try {
      Voice.removeAllListeners();
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = stopListen;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = error => {
      console.log('Speech error', error);
      setIsListening(false);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (textRecognize !== '') {
      if (voice === 'user1') {
        setMessages([
          ...messages,
          {lang: languageFrom, text: textRecognize, user: 'user1'},
        ]);
      } else {
        setMessages([
          ...messages,
          {lang: languageTo, text: textRecognize, user: 'user2'},
        ]);
      }
    }
  }, [textRecognize]);

  console.log('textRecognize', textRecognize);

  console.log('messages received', messages);

  return (
    <Box
      flex={1}
      px={20}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: '#141F47',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconBack color={'#fff'} />
      </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => {
            setLanguageFrom(languageTo);
            setLanguageTo(languageFrom);
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
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(mes, index) => `${mes.text}-${index}`}
        data={messages}
        renderItem={({item}) => {
          return (
            <Box
              row
              mb={20}
              p={12}
              style={{
                backgroundColor: item.user === 'user1' ? '#1A254F' : '#141F47',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#fff',
                maxWidth: SCREEN_WIDTH * 0.7,
                alignSelf: item.user === 'user1' ? 'flex-start' : 'flex-end',
              }}>
              <Typography variant="Regular14" color="White">
                {item.text}
              </Typography>
            </Box>
          );
        }}
      />

      <Box py={12} row center space="between" mb={20}>
        <TouchableOpacity
          onPress={() => {
            isListening ? stopListen() : startListen('user1');
          }}
          style={{padding: 16, backgroundColor: '#21326D', borderRadius: 32}}>
          {voice === 'user1' && isListening ? (
            <IconStop color={'#fff'} />
          ) : (
            <IconVoice color={'#fff'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            isListening ? stopListen() : startListen('user2');
          }}
          style={{padding: 16, backgroundColor: '#21326D', borderRadius: 32}}>
          {voice === 'user2' && isListening ? (
            <IconStop color={'#fff'} />
          ) : (
            <IconVoice color={'#fff'} />
          )}
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

export default ConversationScreen;