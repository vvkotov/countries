import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import {
  CharactersStoreFacadeService,
  CharactersStoreModule,
} from '../shared/store';
import { ButtonComponent } from '@shared/components/button';
import { LinkComponent } from '@shared/components/link';
@Component({
  selector: 'character-details',
  imports: [CharactersStoreModule, ButtonComponent, LinkComponent],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnInit {
  private readonly charactersStoreFacadeService = inject(
    CharactersStoreFacadeService
  );
  private readonly router = inject(Router);

  protected readonly $character =
    this.charactersStoreFacadeService.$selectedCharacter;
  protected readonly $propsToDisplay = computed(() => [
    {
      label: 'Films',
      value: this.$character()?.films || [],
    },
    {
      label: 'TV Shows',
      value: this.$character()?.tvShows || [],
    },
    {
      label: 'Video Games',
      value: this.$character()?.videoGames || [],
    },
  ]);

  ngOnInit(): void {
    if (this.$character()) return;

    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
