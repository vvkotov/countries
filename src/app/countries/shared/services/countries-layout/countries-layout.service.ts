import { inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Injectable()
export class CountriesLayoutService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly MOBILE_BREAKPOINT = '(max-width: 839px)';

  private isMobile$ = this.breakpointObserver
    .observe(this.MOBILE_BREAKPOINT)
    .pipe(map((result) => result.matches));

  private selectedItemId = new BehaviorSubject<string | null>(null);
  readonly selectedItemId$ = this.selectedItemId.asObservable();

  layoutState$: Observable<{
    isMobile: boolean;
    hasSelectedItem: boolean;
    showList: boolean;
    showDetails: boolean;
  }>;

  constructor() {
    this.layoutState$ = combineLatest([
      this.isMobile$,
      this.selectedItemId$,
    ]).pipe(
      map(([isMobile, selectedItemId]) => {
        const hasSelectedItem = selectedItemId !== null;

        return {
          isMobile,
          hasSelectedItem,
          showList: !isMobile || (isMobile && !hasSelectedItem),
          showDetails: !isMobile
            ? hasSelectedItem
            : isMobile && hasSelectedItem,
        };
      })
    );
  }

  selectItem(id: string | null): void {
    this.selectedItemId.next(id);
  }

  backToList(): void {
    this.selectedItemId.next(null);
  }
}
