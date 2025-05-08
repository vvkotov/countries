import { TestBed } from '@angular/core/testing';

import { CharactersStoreFacadeService } from './characters-store-facade.service';

describe('CharactersStoreFacadeService', () => {
  let service: CharactersStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
