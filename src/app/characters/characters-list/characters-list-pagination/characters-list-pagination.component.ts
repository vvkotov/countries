import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'characters-list-pagination',
  imports: [],
  templateUrl: './characters-list-pagination.component.html',
  styleUrl: './characters-list-pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListPaginationComponent {
  $currentPage = input<number>(1, { alias: 'currentPage' });
  $totalPages = input<number>(1, { alias: 'totalPages' });
  $nextPageUrl = input<string | null>(null, { alias: 'nextPageUrl' });
  $previousPageUrl = input<string | null>(null, { alias: 'previousPageUrl' });

  nextPageClicked = output<void>();
  previousPageClicked = output<void>();

  onNextPageClick() {
    this.nextPageClicked.emit();
  }

  onPreviousPageClick() {
    this.previousPageClicked.emit();
  }
}
