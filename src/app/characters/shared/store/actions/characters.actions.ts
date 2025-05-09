import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { PaginatedResponse } from '@shared/models/paginated-response.model';
import { Character } from '../../models';

export const CharactersActions = createActionGroup({
  source: 'Characters',
  events: {
    'Load Characters': emptyProps(),
    'Load Characters Success': props<{
      response: PaginatedResponse<Character>;
    }>(),
    'Load Characters Failure': props<{ error: unknown }>(),
    'Load Next Page': emptyProps(),
    'Load Next Page Success': props<{
      response: PaginatedResponse<Character>;
    }>(),
    'Load Next Page Failure': props<{ error: unknown }>(),
    'Load Previous Page': emptyProps(),
    'Load Previous Page Success': props<{
      response: PaginatedResponse<Character>;
    }>(),
    'Load Previous Page Failure': props<{ error: unknown }>(),
    'Set Selected Character': props<{ character: Character }>(),
  },
});
