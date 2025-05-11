import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsComponent } from './character-details.component';
import { CharactersStoreFacadeServiceMock } from '../shared/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CharactersStoreFacadeService } from '../shared/store';
import { Router } from '@angular/router';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [CharacterDetailsComponent],
    })
      .overrideComponent(CharacterDetailsComponent, {
        set: {
          imports: [],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
          providers: [
            {
              provide: CharactersStoreFacadeService,
              useClass: CharactersStoreFacadeServiceMock,
            },
            { provide: Router, useValue: routerSpy },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
