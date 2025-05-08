import { TestBed } from '@angular/core/testing';

import { CharactersLayoutService } from './characters-layout.service';

describe('CharactersLayoutService', () => {
  let service: CharactersLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
