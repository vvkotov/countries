import { Routes } from '@angular/router';

import { CHARACTERS_ROUTES } from './characters';

export const routes: Routes = [
  {
    path: '',
    children: CHARACTERS_ROUTES,
  },
];
