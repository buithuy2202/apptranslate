import {Box, Typography} from 'components';
import IconArrowRight from 'components/icons/IconArrowRight';
import IconSound from 'components/icons/IconSound';
import React from 'react';
import {StyleProp, TextInput, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  language: string;
  textTranslate: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  onTranslate?: () => void;
}

const CardTranslateFrom = (props: Props) => {
  const {language, textTranslate, style, onChangeText, onTranslate} = props;
  return (
    <Box p={20} style={[{backgroundColor: '#182968', borderRadius: 24}, style]}>
      <Typography variant="Regular12" color="White" style={{marginBottom: 20}}>
        {language}
      </Typography>
      <Box row center space="between" mb={10}>
        <TextInput
          value={textTranslate}
          placeholder="Nhập văn bản ..."
          placeholderTextColor={'grey'}
          multiline
          style={{fontSize: 16, padding: 0, color: '#fff'}}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onTranslate} disabled={textTranslate === ''}>
          <IconArrowRight color={textTranslate ? '#fff' : 'grey'} />
        </TouchableOpacity>
      </Box>
      {textTranslate && (
        <TouchableOpacity>
          <IconSound style={{alignSelf: 'flex-end'}} />
        </TouchableOpacity>
      )}
    </Box>
  );
};

export default CardTranslateFrom;
