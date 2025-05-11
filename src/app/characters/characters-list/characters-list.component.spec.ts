import { CUSTOM_ELEMENTS_SCHEMA, signal, WritableSignal } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CharactersListComponent } from './characters-list.component';
import { CharactersStoreFacadeServiceMock } from '../shared/store';
import { CharactersStoreFacadeService } from '../shared/store';
import { characterMock } from '../shared/mocks';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let storeFacadeService: CharactersStoreFacadeService;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [CharactersListComponent],
    })
      .overrideComponent(CharactersListComponent, {
        set: {
          imports: [ReactiveFormsModule],
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

    fixture = TestBed.createComponent(CharactersListComponent);
    storeFacadeService = fixture.debugElement.injector.get(CharactersStoreFacadeService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load data on init if not loaded', () => {
    (storeFacadeService.$isDataLoaded as WritableSignal<boolean>).set(false);
    spyOn(storeFacadeService, 'loadFirstPage');

    component.ngOnInit();

    expect(storeFacadeService.loadFirstPage).toHaveBeenCalled();
  });

  it('should not load data on init if already loaded', () => {
    (storeFacadeService.$isDataLoaded as WritableSignal<boolean>).set(true);
    spyOn(storeFacadeService, 'loadFirstPage');

    component.ngOnInit();

    expect(storeFacadeService.loadFirstPage).not.toHaveBeenCalled();
  });

  it('should set search query from store on init', () => {
    (storeFacadeService.$searchQuery as WritableSignal<string>).set('test');

    component.ngOnInit();

    expect(component.searchControl.value).toBe('test');
  });

  it('should handle next page click', () => {
    spyOn(storeFacadeService, 'loadNextPage');
    component.onNextPageClick();
    expect(storeFacadeService.loadNextPage).toHaveBeenCalled();
  });

  it('should handle previous page click', () => {
    spyOn(storeFacadeService, 'loadPreviousPage');

    component.onPreviousPageClick();

    expect(storeFacadeService.loadPreviousPage).toHaveBeenCalled();
  });

  it('should handle character click', () => {
    spyOn(storeFacadeService, 'setSelectedCharacter');

    component.onCharacterClick(characterMock);

    expect(storeFacadeService.setSelectedCharacter).toHaveBeenCalledWith(characterMock);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/character', characterMock._id]);
  });

  it('should handle clear search', () => {
    spyOn(storeFacadeService, 'clearSearch');
    spyOn(storeFacadeService, 'loadFirstPage');

    component.onClearSearch();

    expect(component.searchControl.value).toBe('');
    expect(storeFacadeService.clearSearch).toHaveBeenCalled();
    expect(storeFacadeService.loadFirstPage).toHaveBeenCalled();
  });

  it('should debounce search input and only trigger search for queries >= 3 characters, negative case', fakeAsync(() => {
    spyOn(storeFacadeService, 'setSearch');
    component.ngOnInit();

    component.searchControl.setValue('te');
    tick(300);

    expect(storeFacadeService.setSearch).not.toHaveBeenCalled();
  }));

  it('should debounce search input and only trigger search for queries >= 3 characters, positive case', fakeAsync(() => {
    spyOn(storeFacadeService, 'setSearch');
    component.ngOnInit();

    component.searchControl.setValue('test');
    tick(300);

    expect(storeFacadeService.setSearch).toHaveBeenCalled();
  }));
});
