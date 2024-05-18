import {Box, Typography} from 'components';
import IconCopy from 'components/icons/IconCopy';
import IconShare from 'components/icons/IconShare';
import IconSound from 'components/icons/IconSound';
import React from 'react';
import {Share, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {LanguageVariant, getFullLanguageName} from 'utils/constant';

interface Props {
  language: LanguageVariant;
  textTranslate: string;
  style?: StyleProp<ViewStyle>;
  onSpeech?: () => void;
  copyText?: () => void;
}

const CardTranslate = (props: Props) => {
  const {language, textTranslate, style, onSpeech, copyText} = props;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: textTranslate,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {}
  };

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
        color={textTranslate === 'Error' ? 'Red_500' : 'White'}
        style={{marginBottom: 8}}>
        {textTranslate}
      </Typography>
      <Box row center>
        <TouchableOpacity onPress={copyText}>
          <IconCopy />
        </TouchableOpacity>
        <Box row flex={1} space="between" pl={16}>
          <TouchableOpacity onPress={onShare}>
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

export default CardTranslate;
