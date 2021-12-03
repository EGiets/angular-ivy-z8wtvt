import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  name = 'Ellis ' ;
  input: string;
  output: string;
  button; stirng;

  verplaats () {
    this.output = this.input;
    this.input = '';
  }
  
  
  
}
 