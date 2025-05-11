import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListPaginationComponent } from './characters-list-pagination.component';

describe('CharactersListPaginationComponent', () => {
  let component: CharactersListPaginationComponent;
  let fixture: ComponentFixture<CharactersListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListPaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
