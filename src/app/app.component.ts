import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountriesComponent } from './countries';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'countries';
}
