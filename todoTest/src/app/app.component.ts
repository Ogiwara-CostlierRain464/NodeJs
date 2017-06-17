import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .completed {
    text-decoration: line-through;
    }
  `]
})
export class AppComponent{
  title = 'Todo Angular 2';
}
