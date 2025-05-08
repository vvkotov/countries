import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import { CharactersActions } from '../actions/characters.actions';
import { CharactersApiService } from '../../services/characters-api';

@Injectable()
export class CharactersEffects {
  private readonly actions$ = inject(Actions);
  private readonly charactersApiService = inject(CharactersApiService);

  loadCharacterss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharactersActions.loadCharacters),
      concatMap(() =>
        this.charactersApiService.getCharacters().pipe(
          map((response) =>
            CharactersActions.loadCharactersSuccess({ response })
          ),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        )
      )
    );
  });
}
