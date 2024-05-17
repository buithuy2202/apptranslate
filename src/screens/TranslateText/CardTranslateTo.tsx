import {Box, Typography} from 'components';
import IconCopy from 'components/icons/IconCopy';
import IconShare from 'components/icons/IconShare';
import IconSound from 'components/icons/IconSound';
import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {getFullLanguageName, LanguageVariant} from 'utils/constant';

interface Props {
  language: LanguageVariant;
  textTranslated: string;
  style?: StyleProp<ViewStyle>;
  onSpeech?: () => void;
  copyText?: () => void;
}

const CardTranslateTo = (props: Props) => {
  const {language, textTranslated, style, onSpeech, copyText} = props;

  return (
    <Box
      py={20}
      px={20}
      style={[{backgroundColor: '#556BBE', borderRadius: 24}, style]}>
      <Typography variant="Regular12" color="White" style={{marginBottom: 20}}>
        {getFullLanguageName(language)}
      </Typography>
      <Typography
        variant="Regular16"
        color={textTranslated === 'Error' ? 'Red_500' : 'White'}
        style={{marginBottom: 8}}>
        {textTranslated}
      </Typography>
      <Box row center>
        <TouchableOpacity onPress={copyText}>
          <IconCopy />
        </TouchableOpacity>
        <Box row flex={1} space="between" pl={16}>
          <TouchableOpacity>
            <IconShare />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSpeech}>
            <IconSound />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default CardTranslateTo;
