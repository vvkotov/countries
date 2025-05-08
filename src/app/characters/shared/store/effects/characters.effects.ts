import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { CharactersActions } from '../actions/characters.actions';
import { CharactersApiService } from '../../services/characters-api';
import { CharactersStoreFacadeService } from '../characters-store-facade.service';
@Injectable()
export class CharactersEffects {
  private readonly actions$ = inject(Actions);
  private readonly charactersApiService = inject(CharactersApiService);
  private readonly charactersStoreFacadeService = inject(
    CharactersStoreFacadeService
  );

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

  loadNextPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharactersActions.loadNextPage),
      withLatestFrom(this.charactersStoreFacadeService.$nextPageUrl()!),
      concatMap(([_, nextPageUrl]) =>
        this.charactersApiService.getPageByUrl(nextPageUrl).pipe(
          map((response) =>
            CharactersActions.loadNextPageSuccess({ response })
          ),
          catchError((error) =>
            of(CharactersActions.loadNextPageFailure({ error }))
          )
        )
      )
    );
  });

  loadPreviousPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharactersActions.loadPreviousPage),
      withLatestFrom(this.charactersStoreFacadeService.$previousPageUrl()!),
      concatMap(([_, previousPageUrl]) =>
        this.charactersApiService.getPageByUrl(previousPageUrl).pipe(
          map((response) =>
            CharactersActions.loadPreviousPageSuccess({ response })
          ),
          catchError((error) =>
            of(CharactersActions.loadPreviousPageFailure({ error }))
          )
        )
      )
    );
  });
}
