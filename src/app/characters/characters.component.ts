import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { CharactersListComponent } from './characters-list';
import { CharacterDetailsComponent } from './character-details';
import {
  CharactersStoreModule,
  CharactersStoreFacadeService,
} from './shared/store';

@Component({
  selector: 'characters',
  imports: [
    CharactersListComponent,
    CharacterDetailsComponent,
    CharactersStoreModule,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  private charactersStoreFacadeService = inject(CharactersStoreFacadeService);

  readonly $list = this.charactersStoreFacadeService.$items;
  readonly $isListLoading = this.charactersStoreFacadeService.$isListLoading;
  readonly $currentPage = this.charactersStoreFacadeService.$currentPage;
  readonly $nextPageUrl = this.charactersStoreFacadeService.$nextPageUrl;
  readonly $previousPageUrl =
    this.charactersStoreFacadeService.$previousPageUrl;
  readonly $totalPages = this.charactersStoreFacadeService.$totalPages;

  ngOnInit(): void {
    this.charactersStoreFacadeService.loadFirstPage();
  }

  onNextPageClick() {
    this.charactersStoreFacadeService.loadNextPage();
  }

  onPreviousPageClick() {
    this.charactersStoreFacadeService.loadPreviousPage();
  }
}
