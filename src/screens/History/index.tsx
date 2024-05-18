import {Box, Typography} from 'components';
import IconStar from 'components/icons/IconStar';
import {historySelector} from 'containers/Config/selectors';
import {APP_SCREEN, HomeTabScreenProps} from 'navigation/navigation';
import React, {FC} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from 'store/store';
import {getFullLanguageName} from 'utils/constant';

const HistoryScreen: FC<HomeTabScreenProps<APP_SCREEN.HISTORY>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const history = useAppSelector(historySelector);

  return (
    <Box
      flex={1}
      px={20}
      middle
      style={{
        paddingTop: insets.top + 40,
        paddingBottom: insets.bottom,
        backgroundColor: '#141F47',
      }}>
      <FlatList
        data={history}
        showsVerticalScrollIndicator={false}
        keyExtractor={(his, index) => `${his.from.text}-${index}`}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(APP_SCREEN.TRANSLATE_TEXT, {
                  historySaved: item,
                })
              }
              style={{
                padding: 20,
                borderRadius: 24,
                backgroundColor: '#21326D',
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Box style={{gap: 8}}>
                <Typography variant="Bold18" color="White">
                  {item.from.text}
                </Typography>
                <Typography variant="Regular14" color="White">
                  {item.to.text}
                </Typography>
                <Typography variant="Regular14" color="Orange_400">
                  {getFullLanguageName(item.from.lang)} -{' '}
                  {getFullLanguageName(item.to.lang)}
                </Typography>
              </Box>
              <IconStar color={'yellow'} />
            </TouchableOpacity>
          );
        }}
      />
    </Box>
  );
};

export default HistoryScreen;
