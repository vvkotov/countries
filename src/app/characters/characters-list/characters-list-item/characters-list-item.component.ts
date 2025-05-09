import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Character } from '../../shared/models';

@Component({
  selector: 'characters-list-item',
  imports: [],
  templateUrl: './characters-list-item.component.html',
  styleUrl: './characters-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListItemComponent {
  $character = input<Character | null>(null, { alias: 'character' });
  $isLoading = input<boolean>(true, { alias: 'isLoading' });
}
