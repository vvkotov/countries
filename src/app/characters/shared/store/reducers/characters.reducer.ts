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
  };
};

export const charactersReducer = createReducer(
  initialState,
  on(CharactersActions.loadCharacters, (state) => ({
    ...state,
    isListLoading: true,
  })),
  on(CharactersActions.loadCharactersSuccess, loadCharactersSuccess),
  on(CharactersActions.loadCharactersFailure, (state) => ({
    ...state,
    isListLoading: false,
  }))
);
