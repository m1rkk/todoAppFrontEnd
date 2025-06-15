import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  styles: [],
  standalone: true
})
export class App {
  protected title = 'todoFrontend';
}
