import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CharactersEffects } from './characters.effects';
import { Action } from '@ngrx/store';
import { CharactersApiServiceMock } from '../../mocks/characters-api.service.mock';
import { CharactersApiService } from '../../services/characters-api';
import { CharactersStoreFacadeServiceMock } from '../store-facade';
import { CharactersStoreFacadeService } from '../store-facade';

describe('CharactersEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: CharactersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharactersEffects,
        provideMockActions(() => actions$),

        { provide: CharactersApiService, useClass: CharactersApiServiceMock },
        { provide: CharactersStoreFacadeService, useClass: CharactersStoreFacadeServiceMock },
      ],
    });

    effects = TestBed.inject(CharactersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
