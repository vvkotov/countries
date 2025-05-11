import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'a[dsn-link]',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {}
