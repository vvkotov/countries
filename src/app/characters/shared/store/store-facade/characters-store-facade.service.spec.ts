import { TestBed } from '@angular/core/testing';

import { CharactersStoreFacadeService } from './characters-store-facade.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('CharactersStoreFacadeService', () => {
  let service: CharactersStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersStoreFacadeService, provideMockStore()],
    });
    service = TestBed.inject(CharactersStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
