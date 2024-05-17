/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {i18n} from 'libs/i18n';
import RootRoute from 'navigation';
import React, {FC} from 'react';
import {I18nextProvider} from 'react-i18next';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'store/store';
import 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <SafeAreaProvider>
          <PersistGate persistor={persistor} loading={null}>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={'transparent'}
              translucent
            />
            <RootRoute />
          </PersistGate>
        </SafeAreaProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
