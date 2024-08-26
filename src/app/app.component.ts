import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstcComponentComponent } from './components/first-component/first-component.component';
import { SecundComponentComponent } from './components/secund-component/secund-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstcComponentComponent, SecundComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpectreSolutions';
}
