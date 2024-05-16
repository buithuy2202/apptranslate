import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {i18n} from 'libs/i18n';

export interface InitialState {
  showOnboarding?: boolean;
  language?: string;
}
const initialState: InitialState = {
  showOnboarding: true,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    hideOnboarding: state => {
      state.showOnboarding = false;
    },

    changeLang: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
    },
  },
});

export default configSlice.reducer;
export const {hideOnboarding, changeLang} = configSlice.actions;
