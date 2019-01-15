import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stencil-in-angular';

  isOpen = false;

  handleTogglePanel() {
    console.log('toggle panel');
    this.isOpen = !this.isOpen;
  }
}
