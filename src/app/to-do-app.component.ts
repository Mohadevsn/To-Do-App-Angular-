import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appTitle} from './components/title.component'
import { Box } from './components/box.component';

@Component({
  selector: 'to-do-app',
  standalone: true,
  imports: [RouterOutlet, appTitle, Box],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'to-do-app';
}
