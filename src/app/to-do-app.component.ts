import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appTitle} from './components/title.component'

@Component({
  selector: 'to-do-app',
  standalone: true,
  imports: [RouterOutlet, appTitle],
  template: `
    <app-title></app-title>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';
}
