import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryDetailsComponent } from './country-details';
import { CountriesListComponent } from './countries-list';

@Component({
  selector: 'countries',
  imports: [CountriesListComponent, CountryDetailsComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent {}
