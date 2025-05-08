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
    return this.httpClient.get<PaginatedResponse<Character>>(
      `${this.baseUrl}?page=1&pageSize=10`
    );
  }
}
