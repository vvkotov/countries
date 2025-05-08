import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CharactersState } from '../models';
import { charactersFeatureKey } from '../reducers/characters.reducer';

export const selectCharactersState =
  createFeatureSelector<CharactersState>(charactersFeatureKey);

export const getItems = createSelector(
  selectCharactersState,
  ({ data }) => data
);
export const getIsListLoading = createSelector(
  selectCharactersState,
  ({ isListLoading }) => isListLoading
);
export const getCurrentPage = createSelector(
  selectCharactersState,
  ({ currentPage }) => currentPage
);
export const getNextPageUrl = createSelector(
  selectCharactersState,
  ({ nextPageUrl }) => nextPageUrl
);
export const getPreviousPageUrl = createSelector(
  selectCharactersState,
  ({ previousPageUrl }) => previousPageUrl
);
export const getTotalPages = createSelector(
  selectCharactersState,
  ({ totalPages }) => totalPages
);
