import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Character } from '../shared/models';
import { CharactersListItemComponent } from './characters-list-item';

@Component({
  selector: 'characters-list',
  imports: [CharactersListItemComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent {
  $characters = input<Character[]>([], { alias: 'characters' });
}
