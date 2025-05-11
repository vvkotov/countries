import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  Signal,
  ViewEncapsulation,
  AfterContentInit,
} from '@angular/core';

import { InputControlDirective } from './shared/directives';

@Component({
  selector: 'shared-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements AfterContentInit {
  private inputControlDirective: Signal<InputControlDirective | undefined> = contentChild(InputControlDirective);

  $isFocused!: Signal<boolean> | undefined;

  ngAfterContentInit(): void {
    this.$isFocused = this.inputControlDirective()?.$isFocused;
  }
}
