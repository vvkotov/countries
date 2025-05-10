import { Route } from '@angular/router';

export const CHARACTERS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./characters-list/characters-list.component').then((m) => m.CharactersListComponent),
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./character-details/character-details.component').then((m) => m.CharacterDetailsComponent),
  },
];
