import { createReducer, on } from '@ngrx/store';
import { CharactersActions } from '../actions/characters.actions';
import { CharactersState } from '../models';
import { PaginatedResponse } from '@shared/models/paginated-response.model';
import { Character } from '../../models';

export const charactersFeatureKey = 'characters';
const initialStubData: Character[] = Array.from(
  { length: 10 },
  (_, i) =>
    ({
      _id: i,
      films: [],
    } as unknown as Character)
);

export const initialState: CharactersState = {
  data: initialStubData,
  nextPageUrl: null,
  previousPageUrl: null,
  totalPages: 0,
  currentPage: 1,
  selectedCharacter: null,
  isListLoading: true,
  isDataLoaded: false,
  searchQuery: '',
};

const fixProtocol = (url: string | null): string | null => {
  if (!url) return null;

  return url.replace('http://', 'https://');
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
    nextPageUrl: fixProtocol(response.info.nextPage),
    previousPageUrl: fixProtocol(response.info.previousPage),
    isDataLoaded: true,
  };
};

export const charactersReducer = createReducer(
  initialState,
  on(
    CharactersActions.loadCharacters,
    CharactersActions.loadNextPage,
    CharactersActions.loadPreviousPage,
    CharactersActions.startSearch,
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
    CharactersActions.searchSuccess,
    (
      state: CharactersState,
      { response }: { response: PaginatedResponse<Character> }
    ): CharactersState => {
      const updatedCommonFields = loadCharactersSuccess(state, { response });
      const currentPage = 1;

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
    CharactersActions.searchFailure,
    (state) => ({
      ...state,
      isListLoading: false,
    })
  ),

  on(CharactersActions.setSelectedCharacter, (state, { character }) => ({
    ...state,
    selectedCharacter: character,
  })),

  on(CharactersActions.clearSearch, (state) => ({
    ...state,
    searchQuery: '',
  })),

  on(CharactersActions.startSearch, (state, { query }) => ({
    ...state,
    searchQuery: query,
  }))
);
