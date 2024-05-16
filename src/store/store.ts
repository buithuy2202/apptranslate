import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {i18n} from 'libs/i18n';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import * as reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['config'],
};

const rootReducers = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(thunk),
});
const persistor = persistStore(store, null, () => {
  const language = store.getState().config.language;
  i18n.changeLanguage(language);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {persistor, store, useAppDispatch, useAppSelector};
