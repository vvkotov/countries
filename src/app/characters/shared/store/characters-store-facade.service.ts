import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';

import { CharactersState } from './models';
import { CharactersActions } from './actions/characters.actions';
import { Character } from '../models';
import {
  getCurrentPage,
  getNextPageUrl,
  getPreviousPageUrl,
  getIsListLoading,
  getItems,
  getTotalPages,
  getSelectedCharacter,
  getIsDataLoaded,
} from './selectors/characters.selectors';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersStoreFacadeService {
  private store$ = inject(Store<CharactersState>);

  $items: Signal<Character[]> = this.store$.selectSignal(getItems);
  $isListLoading: Signal<boolean> = this.store$.selectSignal(getIsListLoading);
  $currentPage: Signal<number> = this.store$.selectSignal(getCurrentPage);
  $nextPageUrl: Signal<string | null> =
    this.store$.selectSignal(getNextPageUrl);
  nextPageUrl$: Observable<string | null> = this.store$.select(getNextPageUrl);
  $previousPageUrl: Signal<string | null> =
    this.store$.selectSignal(getPreviousPageUrl);
  previousPageUrl$: Observable<string | null> =
    this.store$.select(getPreviousPageUrl);
  $totalPages: Signal<number> = this.store$.selectSignal(getTotalPages);
  $selectedCharacter: Signal<Character | null> =
    this.store$.selectSignal(getSelectedCharacter);
  $isDataLoaded: Signal<boolean> = this.store$.selectSignal(getIsDataLoaded);

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
}
