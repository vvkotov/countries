import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginatedResponse } from '@shared/models/paginated-response.model';

import { Character } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = 'https://api.disneyapi.dev/character';

  getCharacters(): Observable<PaginatedResponse<Character>> {
    const params = { page: 1, pageSize: 10 };
    return this.httpClient.get<PaginatedResponse<Character>>(
      `${this.baseUrl}`,
      { params }
    );
  }

  getPageByUrl(url: string): Observable<PaginatedResponse<Character>> {
    return this.httpClient.get<PaginatedResponse<Character>>(url);
  }

  searchCharacters(name: string): Observable<PaginatedResponse<Character>> {
    const params = { name };
    return this.httpClient.get<PaginatedResponse<Character>>(
      `${this.baseUrl}`,
      { params }
    );
  }
}
