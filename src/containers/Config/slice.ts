import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {i18n} from 'libs/i18n';
import {LanguageVariant} from 'utils/constant';

export interface History {
  from: {
    lang: LanguageVariant;
    text: string;
  };
  to: {
    lang: LanguageVariant;
    text: string;
  };
}

export interface InitialState {
  showOnboarding?: boolean;
  language?: string;
  history?: History[];
}
const initialState: InitialState = {
  showOnboarding: true,
  history: [],
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
    saveHistory: (state, action: PayloadAction<History>) => {
      const itemExists = state.history?.some(
        his => JSON.stringify(his) === JSON.stringify(action.payload),
      );

      if (!itemExists) {
        state.history = [...(state.history ?? []), action.payload];
      } else {
        state.history = state.history?.filter(
          his => JSON.stringify(his) !== JSON.stringify(action.payload),
        );
      }
    },
  },
});

export default configSlice.reducer;
export const {hideOnboarding, changeLang, saveHistory} = configSlice.actions;
