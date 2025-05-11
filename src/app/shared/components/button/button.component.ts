import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[dsn-button]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
