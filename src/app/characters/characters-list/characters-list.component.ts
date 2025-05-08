import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'characters-list',
  imports: [],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListComponent {

}
