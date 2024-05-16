import {Box, Typography} from 'components';
import IconCopy from 'components/icons/IconCopy';
import IconShare from 'components/icons/IconShare';
import IconSound from 'components/icons/IconSound';
import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  language: string;
  textTranslated: string;
  style?: StyleProp<ViewStyle>;
}

const CardTranslateTo = (props: Props) => {
  const {language, textTranslated, style} = props;

  return (
    <Box
      py={20}
      px={20}
      style={[{backgroundColor: '#556BBE', borderRadius: 24}, style]}>
      <Typography variant="Regular12" color="White" style={{marginBottom: 20}}>
        {language}
      </Typography>
      <Typography variant="Regular16" color="White" style={{marginBottom: 8}}>
        {textTranslated}
      </Typography>
      {textTranslated && (
        <Box row center>
          <TouchableOpacity>
            <IconCopy />
          </TouchableOpacity>
          <Box row flex={1} space="between" pl={16}>
            <TouchableOpacity>
              <IconShare />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconSound />
            </TouchableOpacity>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CardTranslateTo;
