import { Component } from '@angular/core';

@Component({
  selector: 'content',
  template: `<h1>Hello {{name}}!</h1>`
})
export class AppComponent { name = 'Bruce'; }
