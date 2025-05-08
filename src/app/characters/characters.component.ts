import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { CharactersListComponent } from './characters-list';
import { CharacterDetailsComponent } from './character-details';
import { CharactersApiService } from './shared/services/characters-api';

@Component({
  selector: 'characters',
  imports: [CharactersListComponent, CharacterDetailsComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  private charactersApiService = inject(CharactersApiService);

  ngOnInit(): void {
    this.charactersApiService.getCharacters().subscribe();
  }
}
