import { inject, Injectable, signal, Signal } from '@angular/core';
import { Store } from '@ngrx/store';

import { Character } from '../../models';

import { Observable, of } from 'rxjs';
import { characterMock } from '../../mocks/character.mock';

@Injectable()
export class CharactersStoreFacadeServiceMock {
  $items: Signal<Character[]> = signal<Character[]>([characterMock]);
  $isListLoading: Signal<boolean> = signal<boolean>(false);
  $currentPage: Signal<number> = signal<number>(1);
  $nextPageUrl: Signal<string | null> = signal<string | null>(null);
  nextPageUrl$: Observable<string | null> = of(null);
  $previousPageUrl: Signal<string | null> = signal<string | null>(null);
  previousPageUrl$: Observable<string | null> = of(null);
  $totalPages: Signal<number> = signal<number>(1);
  $selectedCharacter: Signal<Character | null> = signal<Character | null>(null);
  $isDataLoaded: Signal<boolean> = signal<boolean>(true);
  $searchQuery: Signal<string> = signal<string>('');

  loadFirstPage(): void {}

  loadNextPage(): void {}

  loadPreviousPage(): void {}

  setSelectedCharacter(character: Character): void {}

  setSearch(query: string): void {}

  clearSearch(): void {}
}
