import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '../shared/models';
import { CharactersListItemComponent } from './characters-list-item';
import { CharactersListPaginationComponent } from './characters-list-pagination';
import {
  CharactersStoreFacadeService,
  CharactersStoreModule,
} from '../shared/store';
import {
  InputComponent,
  InputControlDirective,
} from '@shared/components/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LinkComponent } from '@shared/components/link';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'characters-list',
  imports: [
    CharactersListItemComponent,
    CharactersListPaginationComponent,
    InputComponent,
    InputControlDirective,
    LinkComponent,
    CharactersStoreModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent {
  private readonly destroyRef = inject(DestroyRef);
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

  readonly searchControl = new FormControl<string>('', { nonNullable: true });

  ngOnInit(): void {
    if (!this.$isDataLoaded()) {
      this.charactersStoreFacadeService.loadFirstPage();
    }

    this.loadData();
    this.setSearchQuery();
    this.listenToSearchChanges();
  }

  onNextPageClick(): void {
    this.charactersStoreFacadeService.loadNextPage();
  }

  onPreviousPageClick(): void {
    this.charactersStoreFacadeService.loadPreviousPage();
  }

  onCharacterClick(character: Character): void {
    this.charactersStoreFacadeService.setSelectedCharacter(character);
    this.router.navigate(['/character', character._id]);
  }

  onClearSearch(): void {
    this.searchControl.reset('', { emitEvent: false });
    this.charactersStoreFacadeService.clearSearch();
    this.charactersStoreFacadeService.loadFirstPage();
  }

  private loadData(): void {
    if (this.$isDataLoaded()) return;

    this.charactersStoreFacadeService.loadFirstPage();
  }

  private setSearchQuery(): void {
    this.searchControl.setValue(
      this.charactersStoreFacadeService.$searchQuery()
    );
  }

  private listenToSearchChanges(): void {
    const byQueryLength = (query: string): boolean => query.length >= 3;

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        filter(byQueryLength),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value) => {
        this.charactersStoreFacadeService.setSearch(value);
      });
  }
}
