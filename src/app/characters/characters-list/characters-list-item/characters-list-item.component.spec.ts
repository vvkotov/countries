import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListItemComponent } from './characters-list-item.component';

describe('CharactersListItemComponent', () => {
  let component: CharactersListItemComponent;
  let fixture: ComponentFixture<CharactersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
