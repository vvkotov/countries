import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharactersComponent } from './characters';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
