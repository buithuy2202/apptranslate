import {Box, Typography} from 'components';
import IconRepeat from 'components/icons/IconRepeat';
import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC, useState} from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_WIDTH} from 'utils/constant';
import CardTranslateFrom from './CardTranslateFrom';
import CardTranslateTo from './CardTranslateTo';

const TranslateText: FC<HomeTabScreenProps<APP_SCREEN.TRANSLATE_TEXT>> = () => {
  const insets = useSafeAreaInsets();
  const [languageFrom, setLanguageFrom] = useState<string>('Việt');
  const [languageTo, setLanguageTo] = useState<string>('Anh');
  const [textFrom, setTextFrom] = useState<string>('');
  const [textTo, setTextTo] = useState<string>('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box
        flex={1}
        px={20}
        middle
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: '#141F47',
        }}>
        <CardTranslateFrom
          style={{marginBottom: 20}}
          language={languageFrom}
          textTranslate={textFrom}
          onChangeText={value => setTextFrom(value)}
        />
        {textTo && (
          <CardTranslateTo
            style={{marginBottom: 32}}
            language={languageTo}
            textTranslated={textTo}
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
          <TouchableOpacity>
            <Typography variant="Regular14" color="White">
              {languageFrom}
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity>
            <Typography variant="Regular14" color="White">
              {languageTo}
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
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default TranslateText;
