import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';

import { CharactersState } from '../models';
import { CharactersActions } from '../actions/characters.actions';
import { Character } from '../../models';
import {
  getCurrentPage,
  getNextPageUrl,
  getPreviousPageUrl,
  getIsListLoading,
  getItems,
  getTotalPages,
  getSelectedCharacter,
  getIsDataLoaded,
  getSearchQuery,
} from '../selectors/characters.selectors';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersStoreFacadeService {
  private store$ = inject(Store<CharactersState>);

  readonly $items: Signal<Character[]> = this.store$.selectSignal(getItems);
  readonly $isListLoading: Signal<boolean> = this.store$.selectSignal(getIsListLoading);
  readonly $currentPage: Signal<number> = this.store$.selectSignal(getCurrentPage);
  readonly $nextPageUrl: Signal<string | null> = this.store$.selectSignal(getNextPageUrl);
  readonly nextPageUrl$: Observable<string | null> = this.store$.select(getNextPageUrl);
  readonly $previousPageUrl: Signal<string | null> = this.store$.selectSignal(getPreviousPageUrl);
  readonly previousPageUrl$: Observable<string | null> = this.store$.select(getPreviousPageUrl);
  readonly $totalPages: Signal<number> = this.store$.selectSignal(getTotalPages);
  readonly $selectedCharacter: Signal<Character | null> = this.store$.selectSignal(getSelectedCharacter);
  readonly $isDataLoaded: Signal<boolean> = this.store$.selectSignal(getIsDataLoaded);
  readonly $searchQuery: Signal<string> = this.store$.selectSignal(getSearchQuery);

  loadFirstPage(): void {
    this.store$.dispatch(CharactersActions.loadCharacters());
  }

  loadNextPage(): void {
    this.store$.dispatch(CharactersActions.loadNextPage());
  }

  loadPreviousPage(): void {
    this.store$.dispatch(CharactersActions.loadPreviousPage());
  }

  setSelectedCharacter(character: Character): void {
    this.store$.dispatch(CharactersActions.setSelectedCharacter({ character }));
  }

  setSearch(query: string): void {
    this.store$.dispatch(CharactersActions.startSearch({ query }));
  }

  clearSearch(): void {
    this.store$.dispatch(CharactersActions.clearSearch());
  }
}
