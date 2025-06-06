import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from '@shared/components/button';
import { LinkComponent } from '@shared/components/link';

import { CharactersStoreFacadeService, CharactersStoreModule } from '../shared/store';

@Component({
  selector: 'character-details',
  imports: [CharactersStoreModule, ButtonComponent, LinkComponent],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnInit {
  private readonly charactersStoreFacadeService = inject(CharactersStoreFacadeService);
  private readonly router = inject(Router);

  protected readonly $character = this.charactersStoreFacadeService.$selectedCharacter;
  protected readonly $propsToDisplay = computed(() => [
    {
      label: 'Films',
      value: (this.$character()?.films || []).join('; '),
    },
    {
      label: 'TV Shows',
      value: (this.$character()?.tvShows || []).join('; '),
    },
    {
      label: 'Video Games',
      value: (this.$character()?.videoGames || []).join('; '),
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
