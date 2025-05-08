import { createReducer, on } from '@ngrx/store';
import { CharactersActions } from '../actions/characters.actions';
import { CharactersState } from '../models';
import { PaginatedResponse } from '@shared/models/paginated-response.model';
import { Character } from '../../models';

export const charactersFeatureKey = 'characters';

export const initialState: CharactersState = {
  data: [],
  nextPageUrl: null,
  previousPageUrl: null,
  totalPages: 0,
  currentPage: 1,
  selectedCharacter: null,
  isListLoading: false,
};

const loadCharactersSuccess = (
  state: CharactersState,
  { response }: { response: PaginatedResponse<Character> }
): CharactersState => {
  return {
    ...state,
    isListLoading: false,
    data: response.data,
    totalPages: response.info.totalPages,
    nextPageUrl: response.info.nextPage,
    previousPageUrl: response.info.previousPage,
  };
};

export const charactersReducer = createReducer(
  initialState,
  on(
    CharactersActions.loadCharacters,
    CharactersActions.loadNextPage,
    CharactersActions.loadPreviousPage,
    (state) => ({
      ...state,
      isListLoading: true,
    })
  ),

  on(CharactersActions.loadCharactersSuccess, loadCharactersSuccess),

  on(
    CharactersActions.loadNextPageSuccess,
    (
      state: CharactersState,
      { response }: { response: PaginatedResponse<Character> }
    ): CharactersState => {
      const updatedCommonFields = loadCharactersSuccess(state, { response });
      const currentPage = updatedCommonFields.currentPage + 1;

      return {
        ...updatedCommonFields,
        currentPage,
      };
    }
  ),

  on(
    CharactersActions.loadPreviousPageSuccess,
    (
      state: CharactersState,
      { response }: { response: PaginatedResponse<Character> }
    ): CharactersState => {
      const updatedCommonFields = loadCharactersSuccess(state, { response });
      const currentPage = updatedCommonFields.currentPage - 1;

      return {
        ...updatedCommonFields,
        currentPage,
      };
    }
  ),

  on(
    CharactersActions.loadCharactersFailure,
    CharactersActions.loadNextPageFailure,
    CharactersActions.loadPreviousPageFailure,
    (state) => ({
      ...state,
      isListLoading: false,
    })
  )
);
