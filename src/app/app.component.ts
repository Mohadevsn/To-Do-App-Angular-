import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appTitle} from './components/title.component';
import { toDoBox} from './components/to-do-box.component';
import { wishList } from './models/wishList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, appTitle, toDoBox, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';
  
}
