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
  },
});
