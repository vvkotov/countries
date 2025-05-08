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
} from './selectors/characters.selectors';

@Injectable()
export class CharactersStoreFacadeService {
  private store$ = inject(Store<CharactersState>);

  $items: Signal<Character[]> = this.store$.selectSignal(getItems);
  $isListLoading: Signal<boolean> = this.store$.selectSignal(getIsListLoading);
  $currentPage: Signal<number> = this.store$.selectSignal(getCurrentPage);
  $nextPageUrl: Signal<string | null> =
    this.store$.selectSignal(getNextPageUrl);
  $previousPageUrl: Signal<string | null> =
    this.store$.selectSignal(getPreviousPageUrl);
  $totalPages: Signal<number> = this.store$.selectSignal(getTotalPages);

  loadFirstPage(): void {
    this.store$.dispatch(CharactersActions.loadCharacters());
  }

  loadNextPage(): void {
    this.store$.dispatch(CharactersActions.loadNextPage());
  }

  loadPreviousPage(): void {
    this.store$.dispatch(CharactersActions.loadPreviousPage());
  }
}
