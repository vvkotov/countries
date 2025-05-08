import { Route } from '@angular/router';

export const CHARACTERS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./characters.component').then((m) => m.CharactersComponent),
  },
];
