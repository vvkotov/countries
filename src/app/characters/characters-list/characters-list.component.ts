import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '../shared/models';
import { CharactersListItemComponent } from './characters-list-item';
import { CharactersListPaginationComponent } from './characters-list-pagination';
import {
  CharactersStoreFacadeService,
  CharactersStoreModule,
} from '../shared/store';

@Component({
  selector: 'characters-list',
  imports: [
    CharactersListItemComponent,
    CharactersListPaginationComponent,
    CharactersStoreModule,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent {
  private readonly router = inject(Router);
  private readonly charactersStoreFacadeService = inject(
    CharactersStoreFacadeService
  );

  readonly $list = this.charactersStoreFacadeService.$items;
  readonly $isListLoading = this.charactersStoreFacadeService.$isListLoading;
  readonly $currentPage = this.charactersStoreFacadeService.$currentPage;
  readonly $nextPageUrl = this.charactersStoreFacadeService.$nextPageUrl;
  readonly $previousPageUrl =
    this.charactersStoreFacadeService.$previousPageUrl;
  readonly $totalPages = this.charactersStoreFacadeService.$totalPages;
  readonly $isDataLoaded = this.charactersStoreFacadeService.$isDataLoaded;

  ngOnInit(): void {
    if (!this.$isDataLoaded()) {
      this.charactersStoreFacadeService.loadFirstPage();
    }
  }

  onNextPageClick() {
    this.charactersStoreFacadeService.loadNextPage();
  }

  onPreviousPageClick() {
    this.charactersStoreFacadeService.loadPreviousPage();
  }

  onCharacterClick(character: Character) {
    this.charactersStoreFacadeService.setSelectedCharacter(character);
    this.router.navigate(['/character', character._id]);
  }
}
