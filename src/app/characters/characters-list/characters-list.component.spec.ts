import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListComponent } from './characters-list.component';
import { CharactersStoreFacadeServiceMock } from '../shared/store';
import { CharactersStoreFacadeService } from '../shared/store';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .overrideComponent(CharactersListComponent, {
        set: {
          imports: [],
          providers: [
            {
              provide: CharactersStoreFacadeService,
              useClass: CharactersStoreFacadeServiceMock,
            },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
