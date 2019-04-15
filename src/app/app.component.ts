import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Hello Angular 6!';
  
btnGroups = [
    { id: 1, title: 'hhgttg' },
    { id: 2, title: "Don't Panic" },
    { id: 3, title: 'Slartibartfast' },
    { id: 4, title: 'Mostly Harmless' }
  ];

btnClicked(e) {
    console.log('Button Bar Click Even Handler - value: '+ e);
  }

}
