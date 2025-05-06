import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = 'https://restcountries.com/v3.1';

  getAllCountres() {
    return this.httpClient.get(`${this.baseUrl}/all?fields=name,flags`);
  }
}
