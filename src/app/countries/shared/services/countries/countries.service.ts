import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = 'https://api.disneyapi.dev/character';

  getAllCountres() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
}
