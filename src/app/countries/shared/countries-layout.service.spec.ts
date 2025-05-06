import { TestBed } from '@angular/core/testing';

import { CountriesLayoutService } from './countries-layout.service';

describe('CountriesLayoutService', () => {
  let service: CountriesLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
