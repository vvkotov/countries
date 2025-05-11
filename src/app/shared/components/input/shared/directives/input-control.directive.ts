import { Directive, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[dsnInputControl]',
})
export class InputControlDirective {
  private readonly isFocusedSignal = signal(false);

  $isFocused = this.isFocusedSignal.asReadonly();

  @HostListener('focus')
  onFocus() {
    this.isFocusedSignal.set(true);
  }

  @HostListener('blur')
  onBlur() {
    this.isFocusedSignal.set(false);
  }
}
