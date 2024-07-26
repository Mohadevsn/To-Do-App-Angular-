import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appTitle} from './components/title.component'

@Component({
  selector: 'to-do-app',
  standalone: true,
  imports: [RouterOutlet, appTitle],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'to-do-app';
}
