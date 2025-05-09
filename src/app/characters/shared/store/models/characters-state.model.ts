import { Character } from '../../models';

export interface CharactersState {
  data: Character[];
  isListLoading: boolean;
  nextPageUrl: null | string;
  previousPageUrl: null | string;
  totalPages: number;
  currentPage: number;
  selectedCharacter: null | Character;
  isDataLoaded: boolean;
}
