import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/store';

const selector = (state: RootState) => state.config;

export const historySelector = createSelector(
  [selector],
  state => state.history,
);
