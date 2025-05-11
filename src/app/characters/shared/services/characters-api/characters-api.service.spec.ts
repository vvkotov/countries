import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { CharactersApiService } from './characters-api.service';

describe('CharactersApiService', () => {
  let service: CharactersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersApiService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    });
    service = TestBed.inject(CharactersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
