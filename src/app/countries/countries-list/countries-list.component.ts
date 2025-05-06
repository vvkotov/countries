import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'countries-list',
  imports: [],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesListComponent {

}
