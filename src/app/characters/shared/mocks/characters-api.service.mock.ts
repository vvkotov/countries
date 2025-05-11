import { Observable, of } from 'rxjs';

import { PaginatedResponse } from '@shared/models/paginated-response.model';
import { Character } from '../models';
import { characterMock } from './character.mock';

export class CharactersApiServiceMock {
  getCharacters(): Observable<PaginatedResponse<Character>> {
    return of({
      data: [characterMock],
      info: {
        count: 10,
        totalPages: 1,
        previousPage: null,
        nextPage: null,
      },
    });
  }

  getPageByUrl(url: string): Observable<PaginatedResponse<Character>> {
    return of({
      data: [characterMock],
      info: {
        count: 10,
        totalPages: 1,
        previousPage: null,
        nextPage: null,
      },
    });
  }

  searchCharacters(name: string): Observable<PaginatedResponse<Character>> {
    return of({
      data: [characterMock],
      info: {
        count: 10,
        totalPages: 1,
        previousPage: null,
        nextPage: null,
      },
    });
  }
}
