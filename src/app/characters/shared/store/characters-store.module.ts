import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { charactersFeatureKey, charactersReducer } from './reducers/characters.reducer';
import { CharactersEffects } from './effects/characters.effects';
import { CharactersStoreFacadeService } from './store-facade';

@NgModule({
  imports: [
    StoreModule.forFeature(charactersFeatureKey, charactersReducer),
    EffectsModule.forFeature([CharactersEffects]),
  ],
  providers: [CharactersStoreFacadeService],
})
export class CharactersStoreModule {}
