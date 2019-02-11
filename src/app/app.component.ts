import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'oron';
  fruitName: string;
  fullName: string;
  onInput(){
    this.fullName = 'The fruit name is: ' + this.fruitName;
  }
}
