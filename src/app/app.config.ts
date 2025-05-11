import {
  ApplicationConfig,
  EnvironmentProviders,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter, withViewTransitions } from '@angular/router';
import { environment } from '../environments/environment';

import { routes } from './app.routes';

const provideDevtools = (): EnvironmentProviders => {
  if (environment.isLocal) {
    return provideStoreDevtools({
      name: 'fairmarkit',
      maxAge: 25,
      logOnly: !environment.isLocal,
    });
  }

  return importProvidersFrom();
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    importProvidersFrom([StoreModule.forRoot({}), EffectsModule.forRoot([])]),
    provideDevtools(),
  ],
};
