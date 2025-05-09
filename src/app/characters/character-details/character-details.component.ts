import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import {
  CharactersStoreFacadeService,
  CharactersStoreModule,
} from '../shared/store';
@Component({
  selector: 'character-details',
  imports: [CharactersStoreModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent implements OnInit {
  private readonly charactersStoreFacadeService = inject(
    CharactersStoreFacadeService
  );
  private readonly router = inject(Router);

  readonly $character = this.charactersStoreFacadeService.$selectedCharacter;

  ngOnInit(): void {
    if (this.$character()) return;

    this.router.navigate(['/']);
  }
}
