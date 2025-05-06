import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { CountryDetailsComponent } from './country-details';
import { CountriesListComponent } from './countries-list';
import { CountriesService } from './shared/services/countries';
import { CountriesLayoutService } from './shared/services/countries-layout';

@Component({
  selector: 'countries',
  imports: [CountriesListComponent, CountryDetailsComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CountriesLayoutService],
})
export class CountriesComponent implements OnInit {
  private readonly countriesService = inject(CountriesService);
  private readonly countriesLayoutService = inject(CountriesLayoutService);

  ngOnInit(): void {
    this.countriesService
      .getAllCountres()
      .subscribe((r) => console.log('r', r));
  }

  selectItem(id: string): void {
    this.countriesLayoutService.selectItem(id);
  }

  goBack(): void {
    this.countriesLayoutService.backToList();
  }
}
